import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateCriancaDto } from "../dto/create-crianca-dto";
import { UpdateCriancaDto } from "../dto/update-crianca-dto";
import { CriancaEntity } from "../entity/crianca.entity";

@Injectable()
export class CriancaRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<CriancaEntity[]> {
    return this.prisma.crianca.findMany({
      include: {
        responsavel: true,
        frequencias: true,
      },
    });
  }

  async findOne(id: number): Promise<CriancaEntity> {
    const crianca = await this.prisma.crianca.findUnique({
      where: { id_crianca: id },
      include: {
        responsavel: true,
        frequencias: true,
      },
    });

    if (!crianca) {
      throw new NotFoundException(`Criança com ID ${id} não encontrada`);
    }

    return crianca;
  }

  async create(createCriancaDto: CreateCriancaDto): Promise<CriancaEntity> {
    // Verificar se o responsável existe
    const responsavelExiste = await this.prisma.responsavel.findUnique({
      where: { id_responsavel: createCriancaDto.id_responsavel },
    });

    if (!responsavelExiste) {
      throw new NotFoundException(`Responsável com ID ${createCriancaDto.id_responsavel} não encontrado`);
    }

    return this.prisma.crianca.create({
      data: {
        id_responsavel: createCriancaDto.id_responsavel,
        nome: createCriancaDto.nome,
        data_nascimento: createCriancaDto.data_nascimento,
        rg: createCriancaDto.rg,
        cpf: createCriancaDto.cpf,
      },
      include: {
        responsavel: true,
        frequencias: true,
      },
    });
  }

  async update(id: number, updateCriancaDto: UpdateCriancaDto): Promise<CriancaEntity> {
    // Verificar se a criança existe
    await this.findOne(id);

    return this.prisma.crianca.update({
      where: { id_crianca: id },
      data: updateCriancaDto,
      include: {
        responsavel: true,
        frequencias: true,
      },
    });
  }

  async remove(id: number): Promise<CriancaEntity> {
    // Verificar se a criança existe
    await this.findOne(id);

    return this.prisma.crianca.delete({
      where: { id_crianca: id },
    });
  }

  async findCriancaWithResponsavel(id: number): Promise<CriancaEntity> {
    return this.findOne(id);
  }
}
