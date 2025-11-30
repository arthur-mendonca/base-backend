import { ConflictException, Injectable } from "@nestjs/common";
import { VoluntarioRepository } from "./repositories/voluntario.repository";
import { CreateVoluntarioDto } from "./dto/create-voluntario.dto";
import { UpdateVoluntarioDto } from "./dto/update-voluntario.dto";
import { Prisma } from "@prisma/client";
import { SnowflakeService } from "../snowflake/snowflake.service";

@Injectable()
export class VoluntarioService {
  constructor(
    private readonly repository: VoluntarioRepository,
    private readonly snowflakeService: SnowflakeService,
  ) {}

  async create(createVoluntarioDto: CreateVoluntarioDto) {
    // Verificar se já existe voluntário com o mesmo CPF
    const existingVoluntario = await this.repository.findByCpf(createVoluntarioDto.cpf);
    if (existingVoluntario) {
      throw new ConflictException("Já existe um voluntário cadastrado com este CPF.");
    }

    const id = this.snowflakeService.generate();

    const voluntarioData: Prisma.VoluntarioCreateInput = {
      id_voluntario: id,
      nome: createVoluntarioDto.nome,
      cpf: createVoluntarioDto.cpf,
      endereco: createVoluntarioDto.endereco,
      email: createVoluntarioDto.email,
      telefone: createVoluntarioDto.telefone,
      disponibilidade: createVoluntarioDto.disponibilidade,
      area_atuacao: createVoluntarioDto.area_atuacao,
      tem_antecedentes: createVoluntarioDto.tem_antecedentes,
      url_comprovante: createVoluntarioDto.url_comprovante || null,
      respondeu_questionario: createVoluntarioDto.respondeu_questionario,
      aceitou_termos: createVoluntarioDto.aceitou_termos,
    };

    return this.repository.create(voluntarioData);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: bigint) {
    return this.repository.findOne(id);
  }

  async update(id: bigint, updateVoluntarioDto: UpdateVoluntarioDto) {
    // Verificar se está tentando atualizar o CPF para um que já existe
    if (updateVoluntarioDto.cpf) {
      const existingVoluntario = await this.repository.findByCpf(updateVoluntarioDto.cpf);
      if (existingVoluntario && existingVoluntario.id_voluntario !== id) {
        throw new ConflictException("Já existe um voluntário cadastrado com este CPF.");
      }
    }

    return this.repository.update(id, updateVoluntarioDto);
  }

  async remove(id: bigint) {
    return this.repository.remove(id);
  }

  async findByCpf(cpf: string) {
    return this.repository.findByCpf(cpf);
  }

  async findByEmail(email: string) {
    return this.repository.findByEmail(email);
  }

  async findByAreaAtuacao(area: string) {
    return this.repository.findByAreaAtuacao(area);
  }

  async findByDisponibilidade(disponibilidade: string) {
    return this.repository.findByDisponibilidade(disponibilidade);
  }

  async findRecentlyCadastrados(days: number = 30) {
    return this.repository.findRecentlyCadastrados(days);
  }

  async findByNome(nome: string) {
    return this.repository.findByNome(nome);
  }

  async findByStatus(status: boolean) {
    return this.repository.findByStatus(status);
  }

  async findByProfile(perfil: string) {
    if (perfil === "admin") {
      // Admin pode ver todos os voluntários
      return this.findAll();
    } else {
      // Outros perfis só podem ver voluntários ativos
      return this.repository.findByStatus(true);
    }
  }

  async generateReport(filter: any) {
    const { area_atuacao, disponibilidade, dataCadastroInicio, dataCadastroFim, nome, status } = filter;

    let voluntarios = await this.findAll();

    if (area_atuacao) {
      voluntarios = voluntarios.filter(voluntario =>
        voluntario.area_atuacao.toLowerCase().includes(area_atuacao.toLowerCase()),
      );
    }

    if (disponibilidade) {
      voluntarios = voluntarios.filter(voluntario =>
        voluntario.disponibilidade.toLowerCase().includes(disponibilidade.toLowerCase()),
      );
    }

    if (dataCadastroInicio && dataCadastroFim) {
      const inicio = new Date(dataCadastroInicio);
      const fim = new Date(dataCadastroFim);

      voluntarios = voluntarios.filter(voluntario => {
        const dataCadastro = new Date(voluntario.data_cadastro);
        return dataCadastro >= inicio && dataCadastro <= fim;
      });
    }

    if (nome) {
      voluntarios = voluntarios.filter(voluntario => voluntario.nome.toLowerCase().includes(nome.toLowerCase()));
    }

    if (status !== undefined) {
      voluntarios = voluntarios.filter(voluntario => voluntario.aceitou_termos === status);
    }

    return voluntarios;
  }

  async findByAtividade(nomeAtividade: string) {
    if (!nomeAtividade || nomeAtividade.trim() === '') {
      throw new ConflictException("Nome da atividade é obrigatório");
    }

    return this.repository.findByAtividade(nomeAtividade);
  }

  async findVoluntariosComEstatisticas() {
    return this.repository.findVoluntariosComEstatisticas();
  }

  async findVoluntariosPorPeriodoAtividade(dataInicio: string, dataFim: string, atividade?: string) {
    const inicio = new Date(dataInicio);
    const fim = new Date(dataFim);

    // Validar datas
    if (isNaN(inicio.getTime()) || isNaN(fim.getTime())) {
      throw new ConflictException("Datas inválidas fornecidas");
    }

    if (inicio > fim) {
      throw new ConflictException("Data de início deve ser anterior à data de fim");
    }

    return this.repository.findVoluntariosPorPeriodoAtividade(inicio, fim, atividade);
  }

  async getRelatorioVoluntariosAtividades(filtros?: {
    dataInicio?: string;
    dataFim?: string;
    atividade?: string;
    areaAtuacao?: string;
  }) {
    let voluntarios;

    if (filtros?.dataInicio && filtros?.dataFim) {
      // Relatório por período
      voluntarios = await this.findVoluntariosPorPeriodoAtividade(
        filtros.dataInicio,
        filtros.dataFim,
        filtros.atividade
      );
    } else {
      // Relatório geral com estatísticas
      voluntarios = await this.findVoluntariosComEstatisticas();

      // Aplicar filtros adicionais se necessário
      if (filtros?.areaAtuacao) {
        voluntarios = voluntarios.filter(v => 
          v.area_atuacao?.toLowerCase().includes(filtros.areaAtuacao!.toLowerCase())
        );
      }
    }

    return {
      filtros: filtros || {},
      totalVoluntarios: voluntarios.length,
      voluntarios,
      geradoEm: new Date(),
    };
  }
}
