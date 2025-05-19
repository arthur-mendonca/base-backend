import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateVoluntarioDto } from "../dto/create-voluntario-dto";
import { UpdateVoluntarioDto } from "../dto/update-voluntario-dto";
import { VoluntarioEntity } from "../entity/voluntario.entity";

@Injectable()
export class VoluntarioRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<VoluntarioEntity[]> {
    return this.prisma.voluntario.findMany();
  }

  async findOne(id: number): Promise<VoluntarioEntity> {
    const voluntario = await this.prisma.voluntario.findUnique({
      where: { id_voluntario: id },
    });

    if (!voluntario) {
      throw new NotFoundException(`Voluntário com ID ${id} não encontrado`);
    }

    return voluntario;
  }

  async create(createVoluntarioDto: CreateVoluntarioDto): Promise<VoluntarioEntity> {
    return this.prisma.voluntario.create({
      data: createVoluntarioDto,
    });
  }

  async update(id: number, updateVoluntarioDto: UpdateVoluntarioDto): Promise<VoluntarioEntity> {
    // Verificar se o voluntário existe
    await this.findOne(id);

    return this.prisma.voluntario.update({
      where: { id_voluntario: id },
      data: updateVoluntarioDto,
    });
  }

  async remove(id: number): Promise<VoluntarioEntity> {
    // Verificar se o voluntário existe
    await this.findOne(id);

    return this.prisma.voluntario.delete({
      where: { id_voluntario: id },
    });
  }
}
