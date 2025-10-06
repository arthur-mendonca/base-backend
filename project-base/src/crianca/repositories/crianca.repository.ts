import { Injectable, NotFoundException } from "@nestjs/common";
import { UpdateCriancaDto } from "../dto/update-crianca.dto";
import { CriancaEntity } from "../entity/crianca.entity";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CriancaRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<CriancaEntity[]> {
    const criancas = await this.prisma.crianca.findMany({
      include: {
        familia: {
          include: {
            responsavel: true,
          },
        },
        matriculas: true,
      },
    });

    return criancas;
  }

  async findOne(id: bigint): Promise<CriancaEntity> {
    const crianca = await this.prisma.crianca.findUnique({
      where: { id_crianca: id },
      include: {
        familia: {
          include: {
            responsavel: true,
          },
        },
        matriculas: true,
      },
    });

    if (!crianca) {
      throw new NotFoundException(`Criança com ID ${id} não encontrada`);
    }

    return crianca;
  }

  async create(criancaData: Prisma.CriancaCreateInput): Promise<CriancaEntity> {
    return await this.prisma.crianca.create({
      data: criancaData,
      include: {
        familia: true,
      },
    });
  }

  async update(id: bigint, updateCriancaDto: UpdateCriancaDto): Promise<CriancaEntity> {
    // Verificar se a criança existe
    await this.findOne(id);

    return await this.prisma.crianca.update({
      where: { id_crianca: id },
      data: updateCriancaDto,
      include: {
        familia: {
          include: {
            responsavel: true,
          },
        },
        matriculas: true,
      },
    });
  }

  async remove(id: bigint): Promise<CriancaEntity> {
    // Verificar se a criança existe
    await this.findOne(id);

    return await this.prisma.crianca.delete({
      where: { id_crianca: id },
    });
  }

  async findByFamilia(id_familia: bigint): Promise<CriancaEntity[]> {
    const pessoas = await this.prisma.crianca.findMany({
      where: { id_familia },
      include: {
        familia: {
          include: {
            responsavel: true,
          },
        },
      },
    });

    return pessoas;
  }

  async findByResponsavel(id_responsavel: bigint): Promise<CriancaEntity[]> {
    const pessoas = await this.prisma.crianca.findMany({
      where: {
        familia: {
          id_responsavel,
        },
      },
      include: {
        familia: {
          include: {
            responsavel: true,
          },
        },
      },
    });

    return pessoas;
  }
}
