import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { UpdateResponsavelDto } from "../dto/update-responsavel.dto";
import { ResponsavelEntity } from "../entity/responsaval.entity";
import { Prisma } from "@prisma/client";

@Injectable()
export class ResponsavelRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<ResponsavelEntity[]> {
    return this.prisma.responsavel.findMany({
      include: {
        criancas: true,
        cestasBasicas: true,
      },
    });
  }

  async findOne(id: bigint): Promise<ResponsavelEntity> {
    const responsavel = await this.prisma.responsavel.findUnique({
      where: { id_responsavel: id },
      include: {
        criancas: true,
        cestasBasicas: true,
      },
    });

    if (!responsavel) {
      throw new NotFoundException(`Responsável com ID ${id} não encontrado`);
    }

    return responsavel;
  }

  async create(responsavelData: Prisma.ResponsavelCreateInput): Promise<ResponsavelEntity> {
    return this.prisma.responsavel.create({
      data: responsavelData,
    });
  }

  async update(id: bigint, updateResponsavelDto: UpdateResponsavelDto): Promise<ResponsavelEntity> {
    // Verificar se o responsável existe
    await this.findOne(id);

    return this.prisma.responsavel.update({
      where: { id_responsavel: id },
      data: updateResponsavelDto,
      include: {
        criancas: true,
        cestasBasicas: true,
      },
    });
  }

  async remove(id: bigint): Promise<ResponsavelEntity> {
    // Verificar se o responsável existe
    await this.findOne(id);

    return this.prisma.responsavel.delete({
      where: { id_responsavel: id },
    });
  }
}
