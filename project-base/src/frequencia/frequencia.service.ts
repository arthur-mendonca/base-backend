import { Injectable } from "@nestjs/common";
import { FrequenciaRepository } from "./repositories/frequencia.repository";
import { CreateFrequenciaDto } from "./dto/create-frequencia.dto";
import { UpdateFrequenciaDto } from "./dto/update-frequencia.dto";
import { Prisma, PrismaClient } from "@prisma/client";
import { SnowflakeService } from "src/snowflake/snowflake.service";

@Injectable()
export class FrequenciaService {
  private prisma = new PrismaClient();
  constructor(
    private readonly repository: FrequenciaRepository,
    private readonly snowflakeService: SnowflakeService,
  ) {}

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: bigint) {
    return this.repository.findOne(id);
  }

  async create(createFrequenciaDto: CreateFrequenciaDto) {
    const id = this.snowflakeService.generate();

    const frequenciaData: Prisma.FrequenciaCreateInput = {
      id_frequencia: id,
      atividade: createFrequenciaDto.atividade,
      data: createFrequenciaDto.data,
      presenca: createFrequenciaDto.presenca,
      crianca: {
        connect: {
          id_crianca: BigInt(createFrequenciaDto.id_crianca),
        },
      },
    };

    return this.repository.create(frequenciaData);
  }

  async update(id: bigint, updateFrequenciaDto: UpdateFrequenciaDto) {
    return this.repository.update(id, updateFrequenciaDto);
  }

  async remove(id: bigint) {
    return this.repository.remove(id);
  }

  async findByChildId(id_crianca: bigint) {
    return this.repository.findByChildId(id_crianca);
  }

  async findByProfile(perfil: string) {
    if (perfil === "admin") {
      return this.prisma.frequencia.findMany();
    } else {
      return this.prisma.frequencia.findMany({
        where: {
          // Adicione condições específicas para outros perfis, se necessário
          // Exemplo: id_crianca: userId
        },
      });
    }
  }

  async generateReport(filter: any) {
    const { atividade, data } = filter;
    const whereConditions: any = {};
    if (atividade) {
      whereConditions.atividade = atividade; // Filtra por atividade
    }
    if (data) {
      whereConditions.data = {
        gte: new Date(data), // Filtra por data maior ou igual
      };
    }
    return this.prisma.frequencia.findMany({
      where: whereConditions,
    });
  }
}
