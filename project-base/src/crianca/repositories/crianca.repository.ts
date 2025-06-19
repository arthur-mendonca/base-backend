import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { UpdateCriancaDto } from "../dto/update-crianca.dto";
import { CriancaEntity } from "../entity/crianca.entity";
import { Prisma } from "@prisma/client";

@Injectable()
export class CriancaRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<CriancaEntity[]> {
    return this.prisma.crianca.findMany({
      include: {
        responsavel: true,
        frequencias: true,
      },
    });
  }

  async findOne(id: bigint): Promise<CriancaEntity> {
    const crianca = await this.prisma.crianca.findUnique({
      where: { id_crianca: id },
      include: {
        responsavel: true,
        frequencias: true,
      },
    });

    if (!crianca) {
      throw new NotFoundException(`Criança com ID ${id} não encontrada`);
    }

    return crianca;
  }

  async create(criancaData: Prisma.CriancaCreateInput): Promise<CriancaEntity> {
    return this.prisma.crianca.create({
      data: criancaData,
    });
  }

  async update(id: bigint, updateCriancaDto: UpdateCriancaDto): Promise<CriancaEntity> {
    // Verificar se a criança existe
    await this.findOne(id);

    return this.prisma.crianca.update({
      where: { id_crianca: id },
      data: updateCriancaDto,
      include: {
        responsavel: true,
        frequencias: true,
      },
    });
  }

  async remove(id: bigint): Promise<CriancaEntity> {
    // Verificar se a criança existe
    await this.findOne(id);

    return this.prisma.crianca.delete({
      where: { id_crianca: id },
    });
  }

  async findCriancaWithResponsavel(id: bigint): Promise<CriancaEntity> {
    return this.findOne(id);
  }
}
