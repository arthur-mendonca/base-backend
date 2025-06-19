import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { UpdateFrequenciaDto } from "../dto/update-frequencia.dto";
import { FrequenciaEntity } from "../entity/frequencia.entity";
import { Prisma } from "@prisma/client";

@Injectable()
export class FrequenciaRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<FrequenciaEntity[]> {
    return this.prisma.frequencia.findMany({
      include: {
        crianca: true,
      },
    });
  }

  async findOne(id: bigint): Promise<FrequenciaEntity> {
    const frequencia = await this.prisma.frequencia.findUnique({
      where: { id_frequencia: id },
      include: {
        crianca: true,
      },
    });

    if (!frequencia) {
      throw new NotFoundException(`Frequência com ID ${id} não encontrada`);
    }

    return frequencia;
  }

  async create(frequenciaData: Prisma.FrequenciaCreateInput): Promise<FrequenciaEntity> {
    return this.prisma.frequencia.create({
      data: frequenciaData,
    });
  }

  async update(id: bigint, updateFrequenciaDto: UpdateFrequenciaDto): Promise<FrequenciaEntity> {
    // Verificar se a frequência existe
    await this.findOne(id);

    return this.prisma.frequencia.update({
      where: { id_frequencia: id },
      data: updateFrequenciaDto,
      include: {
        crianca: true,
      },
    });
  }

  async remove(id: bigint): Promise<FrequenciaEntity> {
    // Verificar se a frequência existe
    await this.findOne(id);

    return this.prisma.frequencia.delete({
      where: { id_frequencia: id },
    });
  }

  async findByChildId(id_crianca: bigint): Promise<FrequenciaEntity[]> {
    const criancaExiste = await this.prisma.crianca.findUnique({
      where: { id_crianca },
    });

    if (!criancaExiste) {
      throw new NotFoundException(`Criança com ID ${id_crianca} não encontrada`);
    }

    return this.prisma.frequencia.findMany({
      where: { id_crianca },
      include: {
        crianca: true,
      },
    });
  }
}
