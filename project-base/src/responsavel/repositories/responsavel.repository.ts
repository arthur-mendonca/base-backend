import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { UpdateResponsavelDto } from "../dto/update-responsavel.dto";
import { Prisma } from "@prisma/client";
import { ResponsavelEntity } from "../entity/responsaval.entity";

@Injectable()
export class ResponsavelRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<ResponsavelEntity[]> {
    return this.prisma.responsavel.findMany({
      include: {
        familia: true,
        cestasBeneficiario: true,
      },
      orderBy: {
        nome: "asc",
      },
    });
  }

  async findOne(id: bigint): Promise<ResponsavelEntity> {
    const responsavel = await this.prisma.responsavel.findUnique({
      where: { id_responsavel: id },
      include: {
        familia: true,
        cestasBeneficiario: true,
      },
    });

    if (!responsavel) {
      throw new NotFoundException(`Responsável com ID ${id} não encontrado`);
    }

    return responsavel;
  }

  async create(responsavelData: Prisma.ResponsavelCreateInput): Promise<ResponsavelEntity> {
    return this.prisma.responsavel.create({
      data: responsavelData,
      include: {
        familia: true,
        cestasBeneficiario: true,
      },
    });
  }

  async update(id: bigint, updateResponsavelDto: UpdateResponsavelDto): Promise<ResponsavelEntity> {
    // Verificar se o responsável existe
    await this.findOne(id);

    return this.prisma.responsavel.update({
      where: { id_responsavel: id },
      data: updateResponsavelDto,
      include: {
        familia: true,
        cestasBeneficiario: true,
      },
    });
  }

  async remove(id: bigint): Promise<ResponsavelEntity> {
    // Verificar se o responsável existe
    await this.findOne(id);

    return this.prisma.responsavel.delete({
      where: { id_responsavel: id },
      include: {
        familia: true,
        cestasBeneficiario: true,
      },
    });
  }

  async findByCpf(cpf: string): Promise<ResponsavelEntity | null> {
    return this.prisma.responsavel.findUnique({
      where: { cpf },
      include: {
        familia: true,
        cestasBeneficiario: true,
      },
    });
  }

  async findByNome(nome: string): Promise<ResponsavelEntity[]> {
    return this.prisma.responsavel.findMany({
      where: {
        nome: {
          contains: nome,
          mode: "insensitive",
        },
      },
      include: {
        familia: true,
        cestasBeneficiario: true,
      },
      orderBy: {
        nome: "asc",
      },
    });
  }

  async findByOcupacao(ocupacao: string): Promise<ResponsavelEntity[]> {
    return this.prisma.responsavel.findMany({
      where: {
        ocupacao: {
          contains: ocupacao,
          mode: "insensitive",
        },
      },
      include: {
        familia: true,
        cestasBeneficiario: true,
      },
      orderBy: {
        nome: "asc",
      },
    });
  }

  async findComFamilia(): Promise<ResponsavelEntity[]> {
    return this.prisma.responsavel.findMany({
      where: {
        familia: {
          isNot: null,
        },
      },
      include: {
        familia: true,
        cestasBeneficiario: true,
      },
      orderBy: {
        nome: "asc",
      },
    });
  }

  async findSemFamilia(): Promise<ResponsavelEntity[]> {
    return this.prisma.responsavel.findMany({
      where: {
        familia: null,
      },
      include: {
        familia: true,
        cestasBeneficiario: true,
      },
      orderBy: {
        nome: "asc",
      },
    });
  }

  async findComCestas(): Promise<ResponsavelEntity[]> {
    return this.prisma.responsavel.findMany({
      where: {
        cestasBeneficiario: {
          some: {},
        },
      },
      include: {
        familia: true,
        cestasBeneficiario: true,
      },
      orderBy: {
        nome: "asc",
      },
    });
  }
}
