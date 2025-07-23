import { Injectable } from "@nestjs/common";
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
    return this.prisma.familia.findMany();
  }

  async findOne(id: bigint) {
    return this.prisma.familia.findUnique({
      where: { id_familia: BigInt(id) },
    });
  }

  async update(id: bigint, updateFamiliaDto: UpdateFamiliaDto) {
    return this.prisma.familia.update({
      where: { id_familia: BigInt(id) },
      data: updateFamiliaDto,
    });
  }

  async remove(id: bigint) {
    return this.prisma.familia.delete({
      where: { id_familia: BigInt(id) },
    });
  }
}
