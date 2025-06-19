import { Injectable } from "@nestjs/common";
import { CriancaRepository } from "./repositories/crianca.repository";
import { CreateCriancaDto } from "./dto/create-crianca.dto";
import { UpdateCriancaDto } from "./dto/update-crianca.dto";
import { Prisma, PrismaClient } from "@prisma/client";
import { SnowflakeService } from "src/snowflake/snowflake.service";

@Injectable()
export class CriancaService {
  private prisma = new PrismaClient();
  constructor(
    private readonly repository: CriancaRepository,
    private readonly snowflakeService: SnowflakeService,
  ) {}

  async create(createCriancaDto: CreateCriancaDto) {
    const id = this.snowflakeService.generate();

    const criancaData: Prisma.CriancaCreateInput = {
      id_crianca: id,
      nome: createCriancaDto.nome,
      data_nascimento: createCriancaDto.data_nascimento,
      rg: createCriancaDto.rg,
      cpf: createCriancaDto.cpf,
      responsavel: {
        connect: {
          id_responsavel: BigInt(createCriancaDto.id_responsavel),
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

  async findByProfile(perfil: string, userId: bigint) {
    if (perfil === "admin") {
      // Admin pode ver todas as crianças
      return this.prisma.crianca.findMany();
    } else {
      // Usuário comum só pode ver suas próprias crianças
      return this.prisma.crianca.findMany({
        where: {
          id_responsavel: userId, // Supondo que você tenha um campo que relaciona a criança ao responsável
        },
      });
    }
  }
  async findCriancaWithResponsavel(id: bigint) {
    return this.repository.findCriancaWithResponsavel(id);
  }
  // Função para gerar relatórios
  async generateReport(filter: any) {
    const { data_nascimento, status_presenca } = filter;
    const whereConditions: any = {};
    if (data_nascimento) {
      whereConditions.data_nascimento = {
        gte: new Date(data_nascimento), // Filtra por data de nascimento maior ou igual
      };
    }
    if (status_presenca) {
      whereConditions.status_presenca = status_presenca; // Filtra por status de presença
    }
    return this.prisma.crianca.findMany({
      where: whereConditions,
    });
  }
}
