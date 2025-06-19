import { Injectable } from "@nestjs/common";
import { ResponsavelRepository } from "./repositories/responsavel.repository";
import { CreateResponsavelDto } from "./dto/create-responsavel.dto";
import { UpdateResponsavelDto } from "./dto/update-responsavel.dto";
import { Prisma, PrismaClient } from "@prisma/client";
import { SnowflakeService } from "src/snowflake/snowflake.service";

@Injectable()
export class ResponsavelService {
  constructor(
    private readonly repository: ResponsavelRepository,
    private readonly snowflakeService: SnowflakeService,
  ) {}

  private prisma = new PrismaClient();

  async create(createResponsavelDto: CreateResponsavelDto) {
    const id = this.snowflakeService.generate();

    const responsavelData: Prisma.ResponsavelCreateInput = {
      ...createResponsavelDto,
      id_responsavel: id,
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
    return this.repository.update(id, updateResponsavelDto);
  }

  async remove(id: bigint) {
    return this.repository.remove(id);
  }

  async findByProfile(perfil: string) {
    if (perfil === "admin") {
      return this.prisma.responsavel.findMany();
    } else {
      return this.prisma.responsavel.findMany({
        where: {
          // Adicione condições específicas para outros perfis, se necessário
          // Exemplo: ocupacao: 'Professor' (ou qualquer outra lógica que faça sentido)
        },
      });
    }
  }

  async generateReport(filter: any) {
    const { parentesco_com_crianca, ocupacao } = filter;
    const whereConditions: any = {};
    if (parentesco_com_crianca) {
      whereConditions.parentesco_com_crianca = parentesco_com_crianca; // Filtra por parentesco
    }
    if (ocupacao) {
      whereConditions.ocupacao = ocupacao; // Filtra por ocupação
    }
    return this.prisma.responsavel.findMany({
      where: whereConditions,
    });
  }
}
