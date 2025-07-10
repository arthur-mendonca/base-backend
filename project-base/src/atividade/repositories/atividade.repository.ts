import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { AtividadeEntity } from "../entity/atividade.entity";
import { CreateAtividadeDto } from "../dto/create-atividade.dto";
import { UpdateAtividadeDto } from "../dto/update-atividade.dto";
import { Prisma } from "@prisma/client";

@Injectable()
export class AtividadeRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<AtividadeEntity[]> {
    return await this.prisma.atividade.findMany({
      orderBy: {
        nome: "asc",
      },
      include: {
        materias: true,
        frequencias: true,
      },
    });
  }

  async findOne(id: bigint): Promise<AtividadeEntity> {
    const atividade = await this.prisma.atividade.findUnique({
      where: { id_atividade: id },
      include: {
        materias: true,
        frequencias: true,
      },
    });

    if (!atividade) {
      throw new NotFoundException(`Atividade com ID ${id} não encontrada`);
    }

    return atividade;
  }

  async create(data: CreateAtividadeDto & { id_atividade: bigint }): Promise<AtividadeEntity> {
    return await this.prisma.atividade.create({
      data,
      include: {
        materias: true,
      },
    });
  }

  async update(id: bigint, data: UpdateAtividadeDto): Promise<AtividadeEntity> {
    // Verificar se a atividade existe
    await this.findOne(id);

    return await this.prisma.atividade.update({
      where: { id_atividade: id },
      data,
      include: {
        materias: true,
        frequencias: true,
      },
    });
  }

  async remove(id: bigint): Promise<AtividadeEntity> {
    // Verificar se a atividade existe
    await this.findOne(id);

    return await this.prisma.atividade.delete({
      where: { id_atividade: id },
    });
  }

  async findByTipo(tipo: string): Promise<AtividadeEntity[]> {
    return await this.prisma.atividade.findMany({
      where: { tipo: tipo as Prisma.Enumerable<any> },
      orderBy: {
        nome: "asc",
      },
      include: {
        materias: true,
      },
    });
  }

  async findByPublicoAlvo(publicoAlvo: string): Promise<AtividadeEntity[]> {
    return await this.prisma.atividade.findMany({
      where: {
        publico_alvo: {
          contains: publicoAlvo,
          mode: "insensitive",
        },
      },
      orderBy: {
        nome: "asc",
      },
      include: {
        materias: true,
      },
    });
  }

  async findByDiaSemana(dia: string): Promise<AtividadeEntity[]> {
    return await this.prisma.atividade.findMany({
      where: {
        dias_semana: {
          contains: dia,
        },
      },
      orderBy: {
        nome: "asc",
      },
      include: {
        materias: true,
      },
    });
  }
}
