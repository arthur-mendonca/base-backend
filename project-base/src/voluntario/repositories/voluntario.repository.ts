import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { UpdateVoluntarioDto } from "../dto/update-voluntario.dto";
import { VoluntarioEntity } from "../entity/voluntario.entity";
import { Prisma } from "@prisma/client";

@Injectable()
export class VoluntarioRepository {
  constructor(private prisma: PrismaService) {}

  async create(voluntarioData: Prisma.VoluntarioCreateInput): Promise<VoluntarioEntity> {
    return await this.prisma.voluntario.create({
      data: voluntarioData,
    });
  }

  async findAll(): Promise<VoluntarioEntity[]> {
    return this.prisma.voluntario.findMany();
  }

  async findOne(id: bigint): Promise<VoluntarioEntity> {
    const voluntario = await this.prisma.voluntario.findUnique({
      where: { id_voluntario: id },
    });

    if (!voluntario) {
      throw new NotFoundException(`Voluntário com ID ${id} não encontrado`);
    }

    return voluntario;
  }

  async update(id: bigint, updateVoluntarioDto: UpdateVoluntarioDto): Promise<VoluntarioEntity> {
    // Verificar se o voluntário existe
    await this.findOne(id);

    return this.prisma.voluntario.update({
      where: { id_voluntario: id },
      data: updateVoluntarioDto,
    });
  }

  async remove(id: bigint): Promise<VoluntarioEntity> {
    // Verificar se o voluntário existe
    await this.findOne(id);

    return this.prisma.voluntario.delete({
      where: { id_voluntario: id },
    });
  }

  async findManyByFilter(where: Prisma.VoluntarioWhereInput): Promise<VoluntarioEntity[]> {
    return this.prisma.voluntario.findMany({ where });
  }
}
