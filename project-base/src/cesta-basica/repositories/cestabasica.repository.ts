import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateCestaBasicaDto } from "../dto/create-cestabasica-dto";
import { UpdateCestaBasicaDto } from "../dto/update-cestabasica-dto";
import { CestaBasicaEntity } from "../entity/cestabasica.entity";

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

  async findOne(id: number): Promise<CestaBasicaEntity> {
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

  async create(createCestaBasicaDto: CreateCestaBasicaDto): Promise<CestaBasicaEntity> {
    // Verificar se o responsável existe
    const responsavelExiste = await this.prisma.responsavel.findUnique({
      where: { id_responsavel: createCestaBasicaDto.id_responsavel },
    });

    if (!responsavelExiste) {
      throw new NotFoundException(`Responsável com ID ${createCestaBasicaDto.id_responsavel} não encontrado`);
    }

    return this.prisma.cestaBasica.create({
      data: {
        id_responsavel: createCestaBasicaDto.id_responsavel,
        data_entrega: createCestaBasicaDto.data_entrega,
        quantidade: createCestaBasicaDto.quantidade,
        observacoes: createCestaBasicaDto.observacoes,
      },
      include: {
        responsavel: true,
      },
    });
  }

  async update(id: number, updateCestaBasicaDto: UpdateCestaBasicaDto): Promise<CestaBasicaEntity> {
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

  async remove(id: number): Promise<CestaBasicaEntity> {
    // Verificar se a cesta básica existe
    await this.findOne(id);

    return this.prisma.cestaBasica.delete({
      where: { id_cesta: id },
    });
  }
}
