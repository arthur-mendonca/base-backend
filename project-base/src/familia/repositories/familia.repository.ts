import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateFamiliaDto } from "../dto/create-familia.dto";
import { UpdateFamiliaDto } from "../dto/update-familia.dto";
import { SnowflakeService } from "src/snowflake/snowflake.service";

@Injectable()
export class FamiliaRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly snowflake: SnowflakeService,
  ) {}

  async create(createFamiliaDto: CreateFamiliaDto) {
    return this.prisma.familia.create({
      data: {
        ...createFamiliaDto,
        id_familia: this.snowflake.generate(),
      },
    });
  }

  async findAll() {
    return this.prisma.familia.findMany();
  }

  async findOne(id: number) {
    return this.prisma.familia.findUnique({
      where: { id_familia: BigInt(id) },
    });
  }

  async update(id: number, updateFamiliaDto: UpdateFamiliaDto) {
    return this.prisma.familia.update({
      where: { id_familia: BigInt(id) },
      data: updateFamiliaDto,
    });
  }

  async remove(id: number) {
    return this.prisma.familia.delete({
      where: { id_familia: BigInt(id) },
    });
  }
}
