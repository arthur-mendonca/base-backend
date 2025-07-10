import { ConflictException, Injectable } from "@nestjs/common";
import { ResponsavelRepository } from "./repositories/responsavel.repository";
import { CreateResponsavelDto } from "./dto/create-responsavel.dto";
import { UpdateResponsavelDto } from "./dto/update-responsavel.dto";
import { Prisma } from "@prisma/client";
import { SnowflakeService } from "../snowflake/snowflake.service";

@Injectable()
export class ResponsavelService {
  constructor(
    private readonly repository: ResponsavelRepository,
    private readonly snowflakeService: SnowflakeService,
  ) {}

  async create(createResponsavelDto: CreateResponsavelDto) {
    // Verificar se já existe responsável com o mesmo CPF
    const existente = await this.repository.findByCpf(createResponsavelDto.cpf);
    if (existente) {
      throw new ConflictException(`Já existe um responsável cadastrado com o CPF ${createResponsavelDto.cpf}`);
    }

    const id = this.snowflakeService.generate();

    const responsavelData: Prisma.ResponsavelCreateInput = {
      id_responsavel: id,
      nome: createResponsavelDto.nome,
      cpf: createResponsavelDto.cpf,
      rg: createResponsavelDto.rg,
      data_nascimento: createResponsavelDto.data_nascimento,
      telefone: createResponsavelDto.telefone,
      email: createResponsavelDto.email || null,
      ocupacao: createResponsavelDto.ocupacao || null,
      endereco: createResponsavelDto.endereco,
      foto_url: createResponsavelDto.foto_url || null,
    };

    return this.repository.create(responsavelData);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: bigint) {
    return this.repository.findOne(id);
  }

  async update(id: bigint, updateResponsavelDto: UpdateResponsavelDto) {
    // Se está atualizando o CPF, verificar se já existe outro responsável com este CPF
    if (updateResponsavelDto.cpf) {
      const existente = await this.repository.findByCpf(updateResponsavelDto.cpf);
      if (existente && existente.id_responsavel !== id) {
        throw new ConflictException(`Já existe um responsável cadastrado com o CPF ${updateResponsavelDto.cpf}`);
      }
    }

    return this.repository.update(id, updateResponsavelDto);
  }

  async remove(id: bigint) {
    return this.repository.remove(id);
  }

  async findByCpf(cpf: string) {
    return this.repository.findByCpf(cpf);
  }

  async findByNome(nome: string) {
    return this.repository.findByNome(nome);
  }

  async findByOcupacao(ocupacao: string) {
    return this.repository.findByOcupacao(ocupacao);
  }

  async findComFamilia() {
    return this.repository.findComFamilia();
  }

  async findSemFamilia() {
    return this.repository.findSemFamilia();
  }

  async findComCestas() {
    return this.repository.findComCestas();
  }

  async findByProfile(perfil: string) {
    if (perfil === "admin") {
      // Admin pode ver todos os responsáveis
      return this.findAll();
    } else {
      // Usuário comum pode ter acesso limitado
      // Esta é apenas uma implementação padrão, ajustar conforme necessário
      return this.findAll();
    }
  }

  async generateReport(filter: any) {
    const { nome, cpf, ocupacao, comFamilia, semFamilia, comCestas } = filter;

    if (cpf) {
      const responsavel = await this.findByCpf(cpf);
      return responsavel ? [responsavel] : [];
    }

    if (nome) {
      return this.findByNome(nome);
    }

    if (ocupacao) {
      return this.findByOcupacao(ocupacao);
    }

    if (comFamilia === "true") {
      return this.findComFamilia();
    }

    if (semFamilia === "true") {
      return this.findSemFamilia();
    }

    if (comCestas === "true") {
      return this.findComCestas();
    }

    return this.findAll();
  }
}
