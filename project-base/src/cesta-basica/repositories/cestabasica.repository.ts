import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { UpdateCestaBasicaDto } from "../dto/update-cestabasica.dto";
import { CestaBasicaEntity } from "../entity/cestabasica.entity";
import { Prisma } from "@prisma/client";

@Injectable()
export class CestaBasicaRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<CestaBasicaEntity[]> {
    return this.prisma.cestaBasica.findMany({
      include: {
        responsavel: true,
      },
    });
  }

  async findOne(id: bigint): Promise<CestaBasicaEntity> {
    const cestaBasica = await this.prisma.cestaBasica.findUnique({
      where: { id_cesta: id },
      include: {
        responsavel: true,
      },
    });

    if (!cestaBasica) {
      throw new NotFoundException(`Cesta Básica com ID ${id} não encontrada`);
    }

    return cestaBasica;
  }

  async create(cestaBasicaData: Prisma.CestaBasicaCreateInput): Promise<CestaBasicaEntity> {
    return this.prisma.cestaBasica.create({
      data: cestaBasicaData,
    });
  }

  async update(id: bigint, updateCestaBasicaDto: UpdateCestaBasicaDto): Promise<CestaBasicaEntity> {
    // Verificar se a cesta básica existe
    await this.findOne(id);

    return this.prisma.cestaBasica.update({
      where: { id_cesta: id },
      data: updateCestaBasicaDto,
      include: {
        responsavel: true,
      },
    });
  }

  async remove(id: bigint): Promise<CestaBasicaEntity> {
    // Verificar se a cesta básica existe
    await this.findOne(id);

    return this.prisma.cestaBasica.delete({
      where: { id_cesta: id },
    });
  }
}
