import { BadRequestException, Injectable } from "@nestjs/common";
import { CriancaRepository } from "./repositories/crianca.repository";
import { CreateCriancaDto } from "./dto/create-crianca.dto";
import { UpdateCriancaDto } from "./dto/update-crianca.dto";
import { Prisma } from "@prisma/client";
import { SnowflakeService } from "src/snowflake/snowflake.service";

@Injectable()
export class CriancaService {
  constructor(
    private readonly repository: CriancaRepository,
    private readonly snowflakeService: SnowflakeService,
  ) {}

  async create(createCriancaDto: CreateCriancaDto) {
    const idade = this.calcularIdade(new Date(createCriancaDto.data_nascimento));
    if (idade > 17) {
      throw new BadRequestException("Não é permitido cadastrar criança com idade maior que 17 anos.");
    }

    const id = this.snowflakeService.generate();

    const criancaData: Prisma.CriancaCreateInput = {
      id_crianca: id,
      nome: createCriancaDto.nome,
      data_nascimento: createCriancaDto.data_nascimento,
      rg: createCriancaDto.rg || null,
      cpf: createCriancaDto.cpf || null,
      foto_url: createCriancaDto.foto_url || null,
      observacoes: createCriancaDto.observacoes || null,
      matriculada_escola: createCriancaDto.matriculada_escola || false,
      nome_escola: createCriancaDto.nome_escola || null,
      familia: {
        connect: {
          id_familia: BigInt(createCriancaDto.id_familia),
        },
      },
    };

    return this.repository.create(criancaData);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: bigint) {
    return this.repository.findOne(id);
  }

  async update(id: bigint, updateCriancaDto: UpdateCriancaDto) {
    return this.repository.update(id, updateCriancaDto);
  }

  async remove(id: bigint) {
    return this.repository.remove(id);
  }

  async findByFamilia(id_familia: bigint) {
    return this.repository.findByFamilia(id_familia);
  }

  async findByResponsavel(id_responsavel: bigint) {
    return this.repository.findByResponsavel(id_responsavel);
  }

  async findByProfile(perfil: string, userId: bigint) {
    if (perfil === "admin") {
      // Admin pode ver todas as crianças
      return this.findAll();
    } else {
      // Usuário comum só pode ver crianças de suas próprias famílias
      return this.findByResponsavel(userId);
    }
  }

  async generateReport(filter: any) {
    const { dataInicio, dataFim, idFamilia } = filter;

    let criancas = await this.findAll();

    if (dataInicio && dataFim) {
      const inicio = new Date(dataInicio);
      const fim = new Date(dataFim);

      criancas = criancas.filter(crianca => {
        const dataNascimento = new Date(crianca.data_nascimento);
        return dataNascimento >= inicio && dataNascimento <= fim;
      });
    }

    if (idFamilia) {
      criancas = criancas.filter(crianca => crianca.id_familia === BigInt(idFamilia));
    }

    return criancas;
  }

  private calcularIdade(dataNascimento: Date): number {
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const m = hoje.getMonth() - dataNascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < dataNascimento.getDate())) {
      idade--;
    }
    return idade;
  }
}
