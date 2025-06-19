import { Injectable } from "@nestjs/common";
import { ParceiroRepository } from "./repositories/parceiro.repository";
import { CreateParceiroDto } from "./dto/create-parceiro.dto";
import { UpdateParceiroDto } from "./dto/update-parceiro.dto";
import { Prisma, PrismaClient } from "@prisma/client";
import { SnowflakeService } from "src/snowflake/snowflake.service";

@Injectable()
export class ParceiroService {
  private prisma = new PrismaClient();
  constructor(
    private readonly repository: ParceiroRepository,
    private readonly snowflakeService: SnowflakeService,
  ) {}

  async create(createParceiroDto: CreateParceiroDto) {
    const id = this.snowflakeService.generate();

    const parceiroData: Prisma.ParceiroCreateInput = {
      ...createParceiroDto,
      id_parceiro: id,
    };

    return this.repository.create(parceiroData);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: bigint) {
    return this.repository.findOne(id);
  }

  async update(id: bigint, updateParceiroDto: UpdateParceiroDto) {
    return this.repository.update(id, updateParceiroDto);
  }

  async remove(id: bigint) {
    return this.repository.remove(id);
  }

  async findByProfile(perfil: string) {
    if (perfil === "admin") {
      return this.prisma.parceiro.findMany();
    } else {
      return this.prisma.parceiro.findMany({
        where: {
          // Adicione condições específicas para outros perfis, se necessário
          // Exemplo: tipo: 'patrocinador' (ou qualquer outra lógica que faça sentido)
        },
      });
    }
  }

  async generateReport(filter: any) {
    const { tipo, contribuicao } = filter;
    const whereConditions: any = {};
    if (tipo) {
      whereConditions.tipo = tipo; // Filtra por tipo de parceiro
    }
    if (contribuicao) {
      whereConditions.contribuicao = contribuicao; // Filtra por tipo de contribuição
    }
    return this.prisma.parceiro.findMany({
      where: whereConditions,
    });
  }
}
