import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateResponsavelDto } from "../dto/create-responsavel-dto";
import { UpdateResponsavelDto } from "../dto/update-responsavel-dto";
import { ResponsavelEntity } from "../entity/responsaval.entity";

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

  async findOne(id: number): Promise<ResponsavelEntity> {
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

  async create(createResponsavelDto: CreateResponsavelDto): Promise<ResponsavelEntity> {
    return this.prisma.responsavel.create({
      data: createResponsavelDto,
      include: {
        criancas: true,
        cestasBasicas: true,
      },
    });
  }

  async update(id: number, updateResponsavelDto: UpdateResponsavelDto): Promise<ResponsavelEntity> {
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

  async remove(id: number): Promise<ResponsavelEntity> {
    // Verificar se o responsável existe
    await this.findOne(id);

    return this.prisma.responsavel.delete({
      where: { id_responsavel: id },
    });
  }
}
