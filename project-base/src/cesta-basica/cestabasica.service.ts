import { Injectable } from "@nestjs/common";
import { CestaBasicaRepository } from "./repositories/cestabasica.repository";
import { CreateCestaBasicaDto } from "./dto/create-cestabasica.dto";
import { UpdateCestaBasicaDto } from "./dto/update-cestabasica.dto";
import { Prisma, PrismaClient } from "@prisma/client";
import { SnowflakeService } from "src/snowflake/snowflake.service";

@Injectable()
export class CestaBasicaService {
  private prisma = new PrismaClient();
  constructor(
    private readonly repository: CestaBasicaRepository,
    private readonly snowflakeService: SnowflakeService,
  ) {}

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: bigint) {
    return this.repository.findOne(id);
  }

  async create(createCestaBasicaDto: CreateCestaBasicaDto) {
    const id = this.snowflakeService.generate();

    const cestaBasicaData: Prisma.CestaBasicaCreateInput = {
      id_cesta: id,
      data_entrega: createCestaBasicaDto.data_entrega,
      quantidade: createCestaBasicaDto.quantidade,
      observacoes: createCestaBasicaDto.observacoes,
      responsavel: {
        connect: {
          id_responsavel: BigInt(createCestaBasicaDto.id_responsavel),
        },
      },
    };

    return this.repository.create(cestaBasicaData);
  }

  async update(id: bigint, updateCestaBasicaDto: UpdateCestaBasicaDto) {
    return this.repository.update(id, updateCestaBasicaDto);
  }

  async remove(id: bigint) {
    return this.repository.remove(id);
  }

  async findByProfile(perfil: string) {
    if (perfil === "admin") {
      return this.prisma.cestaBasica.findMany();
    } else {
      return this.prisma.cestaBasica.findMany({
        where: {
          // Adicione condições específicas para outros perfis, se necessário
          // Exemplo: id_responsavel: userId
        },
      });
    }
  }

  async generateReport(filter: any) {
    const { data_entrega, quantidade } = filter;
    const whereConditions: any = {};
    if (data_entrega) {
      whereConditions.data_entrega = {
        gte: new Date(data_entrega), // Filtra por data de entrega maior ou igual
      };
    }
    if (quantidade) {
      whereConditions.quantidade = quantidade; // Filtra por quantidade
    }
    return this.prisma.cestaBasica.findMany({
      where: whereConditions,
    });
  }
}
