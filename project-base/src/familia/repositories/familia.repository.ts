import { ConflictException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateFamiliaDto } from "../dto/update-familia.dto";
import { Prisma } from "@prisma/client";

@Injectable()
export class FamiliaRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.FamiliaCreateInput) {
    return this.prisma.familia.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.familia.findMany({
      include: {
        responsavel: true,
      },
    });
  }

  async getFamiliyDetails(id: bigint) {
    return await this.prisma.familia.findUnique({
      where: { id_familia: BigInt(id) },
      include: {
        pessoas: true,
        responsavel: true,
      },
    });
  }

  async findOne(id: bigint) {
    return await this.prisma.familia.findUnique({
      where: { id_familia: BigInt(id) },
    });
  }

  async update(id: bigint, updateFamiliaDto: UpdateFamiliaDto) {
    try {
      return await this.prisma.familia.update({
        where: { id_familia: BigInt(id) },
        data: updateFamiliaDto,
      });
    } catch (error: any) {
      if (error.code === "P2002" && error.meta?.target?.includes("id_responsavel")) {
        throw new ConflictException("Este responsável já está vinculado a outra família.");
      }
      throw error;
    }
  }

  async remove(id: bigint) {
    return this.prisma.familia.delete({
      where: { id_familia: BigInt(id) },
    });
  }
}
