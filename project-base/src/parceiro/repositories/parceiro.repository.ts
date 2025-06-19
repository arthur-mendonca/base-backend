import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { UpdateParceiroDto } from "../dto/update-parceiro.dto";
import { ParceiroEntity } from "../entity/parceiro.entity";
import { Prisma } from ".prisma/client/default";

@Injectable()
export class ParceiroRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<ParceiroEntity[]> {
    return this.prisma.parceiro.findMany();
  }

  async findOne(id: bigint): Promise<ParceiroEntity> {
    const parceiro = await this.prisma.parceiro.findUnique({
      where: { id_parceiro: id },
    });

    if (!parceiro) {
      throw new NotFoundException(`Parceiro com ID ${id} não encontrado`);
    }

    return parceiro;
  }

  async create(parceiroData: Prisma.ParceiroCreateInput): Promise<ParceiroEntity> {
    return this.prisma.parceiro.create({
      data: parceiroData,
    });
  }

  async update(id: bigint, updateParceiroDto: UpdateParceiroDto): Promise<ParceiroEntity> {
    // Verificar se o parceiro existe
    await this.findOne(id);

    return this.prisma.parceiro.update({
      where: { id_parceiro: id },
      data: updateParceiroDto,
    });
  }

  async remove(id: bigint): Promise<ParceiroEntity> {
    // Verificar se o parceiro existe
    await this.findOne(id);

    return this.prisma.parceiro.delete({
      where: { id_parceiro: id },
    });
  }
}
