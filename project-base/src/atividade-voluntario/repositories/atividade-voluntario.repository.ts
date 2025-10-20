import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { AtividadeVoluntarioEntity } from "../entity/atividade-voluntario.entity";
import { CreateAtividadeVoluntarioDto } from "../dto/create-atividade-voluntario.dto";
import { UpdateAtividadeVoluntarioDto } from "../dto/update-atividade-voluntario.dto";

@Injectable()
export class AtividadeVoluntarioRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<AtividadeVoluntarioEntity[]> {
    return await this.prisma.atividadeVoluntario.findMany({
      orderBy: {
        data_realizacao: "desc",
      },
      include: {
        voluntario: true,
      },
    });
  }

  async findOne(id: bigint): Promise<AtividadeVoluntarioEntity> {
    const atividade = await this.prisma.atividadeVoluntario.findUnique({
      where: { id_atividade: id },
      include: {
        voluntario: true,
      },
    });

    if (!atividade) {
      throw new NotFoundException(`Atividade de Voluntário com ID ${id} não encontrada`);
    }

    return atividade;
  }

  async create(data: CreateAtividadeVoluntarioDto & { id_atividade: bigint }): Promise<AtividadeVoluntarioEntity> {
    return await this.prisma.atividadeVoluntario.create({
      data,
      include: {
        voluntario: true,
      },
    });
  }

  async update(id: bigint, data: UpdateAtividadeVoluntarioDto): Promise<AtividadeVoluntarioEntity> {
    // Verificar se a atividade existe
    await this.findOne(id);

    return await this.prisma.atividadeVoluntario.update({
      where: { id_atividade: id },
      data,
      include: {
        voluntario: true,
      },
    });
  }

  async remove(id: bigint): Promise<AtividadeVoluntarioEntity> {
    // Verificar se a atividade existe
    await this.findOne(id);

    return await this.prisma.atividadeVoluntario.delete({
      where: { id_atividade: id },
    });
  }

  async findByVoluntario(id_voluntario: bigint): Promise<AtividadeVoluntarioEntity[]> {
    return await this.prisma.atividadeVoluntario.findMany({
      where: { id_voluntario },
      orderBy: {
        data_realizacao: "desc",
      },
      include: {
        voluntario: true,
      },
    });
  }

  async findByPeriodo(dataInicio: Date, dataFim: Date): Promise<AtividadeVoluntarioEntity[]> {
    return await this.prisma.atividadeVoluntario.findMany({
      where: {
        data_realizacao: {
          gte: dataInicio,
          lte: dataFim,
        },
      },
      orderBy: {
        data_realizacao: "desc",
      },
      include: {
        voluntario: true,
      },
    });
  }
}
