import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { UpdateVoluntarioDto } from "../dto/update-voluntario.dto";
import { VoluntarioEntity } from "../entity/voluntario.entity";
import { Prisma } from "@prisma/client";

@Injectable()
export class VoluntarioRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<VoluntarioEntity[]> {
    return await this.prisma.voluntario.findMany({
      orderBy: {
        nome: "asc",
      },
    });
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

  async create(voluntarioData: Prisma.VoluntarioCreateInput): Promise<VoluntarioEntity> {
    return await this.prisma.voluntario.create({
      data: voluntarioData,
    });
  }

  async update(id: bigint, updateVoluntarioDto: UpdateVoluntarioDto): Promise<VoluntarioEntity> {
    // Verificar se o voluntário existe
    await this.findOne(id);

    return await this.prisma.voluntario.update({
      where: { id_voluntario: id },
      data: updateVoluntarioDto,
    });
  }

  async remove(id: bigint): Promise<VoluntarioEntity> {
    // Verificar se o voluntário existe
    await this.findOne(id);

    return await this.prisma.voluntario.delete({
      where: { id_voluntario: id },
    });
  }

  async findByCpf(cpf: string): Promise<VoluntarioEntity | null> {
    const voluntario = await this.prisma.voluntario.findUnique({
      where: { cpf },
    });

    return voluntario;
  }

  async findByEmail(email: string): Promise<VoluntarioEntity[]> {
    return await this.prisma.voluntario.findMany({
      where: { email },
    });
  }

  async findByAreaAtuacao(area: string): Promise<VoluntarioEntity[]> {
    return await this.prisma.voluntario.findMany({
      where: {
        area_atuacao: {
          contains: area,
          mode: "insensitive",
        },
      },
      orderBy: {
        nome: "asc",
      },
    });
  }

  async findByDisponibilidade(disponibilidade: string): Promise<VoluntarioEntity[]> {
    return await this.prisma.voluntario.findMany({
      where: {
        disponibilidade: {
          contains: disponibilidade,
          mode: "insensitive",
        },
      },
      orderBy: {
        nome: "asc",
      },
    });
  }

  async findRecentlyCadastrados(days: number = 30): Promise<VoluntarioEntity[]> {
    const date = new Date();
    date.setDate(date.getDate() - days);

    // NOTE: data_cadastro não existe no schema atual; filtrar por data de cadastro
    // exigiria adicionar esse campo ao model `Voluntario` no schema.prisma.
    // Aqui retornamos apenas os voluntários sem filtro por data.
    return await this.prisma.voluntario.findMany({
      orderBy: {
        nome: "asc",
      },
    });
  }

  async findByNome(nome: string): Promise<VoluntarioEntity[]> {
    return await this.prisma.voluntario.findMany({
      where: {
        nome: {
          contains: nome,
          mode: "insensitive",
        },
      },
      orderBy: {
        nome: "asc",
      },
    });
  }

  async findByStatus(status: boolean): Promise<VoluntarioEntity[]> {
    return await this.prisma.voluntario.findMany({
      where: { aceitou_termos: status },
      orderBy: {
        nome: "asc",
      },
    });
  }
}