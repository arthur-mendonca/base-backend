import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateParceiroDto } from "../dto/create-parceiro.dto";
import { UpdateParceiroDto } from "../dto/update-parceiro.dto";
import { ParceiroEntity } from "../entity/parceiro.entity";

@Injectable()
export class ParceiroRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<ParceiroEntity[]> {
    return this.prisma.parceiro.findMany();
  }

  async findOne(id: number): Promise<ParceiroEntity> {
    const parceiro = await this.prisma.parceiro.findUnique({
      where: { id_parceiro: id },
    });

    if (!parceiro) {
      throw new NotFoundException(`Parceiro com ID ${id} não encontrado`);
    }

    return parceiro;
  }

  async create(createParceiroDto: CreateParceiroDto): Promise<ParceiroEntity> {
    return this.prisma.parceiro.create({
      data: createParceiroDto,
    });
  }

  async update(id: number, updateParceiroDto: UpdateParceiroDto): Promise<ParceiroEntity> {
    // Verificar se o parceiro existe
    await this.findOne(id);

    return this.prisma.parceiro.update({
      where: { id_parceiro: id },
      data: updateParceiroDto,
    });
  }

  async remove(id: number): Promise<ParceiroEntity> {
    // Verificar se o parceiro existe
    await this.findOne(id);

    return this.prisma.parceiro.delete({
      where: { id_parceiro: id },
    });
  }
}
