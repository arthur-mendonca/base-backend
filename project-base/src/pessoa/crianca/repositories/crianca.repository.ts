import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../prisma/prisma.service";
import { UpdateCriancaDto } from "../dto/update-crianca.dto";
import { CriancaEntity } from "../entity/crianca.entity";
import { Prisma } from "@prisma/client";

@Injectable()
export class CriancaRepository {
  constructor(private prisma: PrismaService) {}

  // Idade máxima para ser considerado criança (em anos)
  private IDADE_MAXIMA_CRIANCA = 12;

  private calcularIdade(dataNascimento: Date): number {
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const m = hoje.getMonth() - dataNascimento.getMonth();

    if (m < 0 || (m === 0 && hoje.getDate() < dataNascimento.getDate())) {
      idade--;
    }

    return idade;
  }

  private ehCrianca(pessoa: any): boolean {
    return this.calcularIdade(pessoa.data_nascimento) <= this.IDADE_MAXIMA_CRIANCA;
  }

  async findAll(): Promise<CriancaEntity[]> {
    const pessoas = await this.prisma.pessoa.findMany({
      where: { ehCrianca: true },
      include: {
        familia: {
          include: {
            responsavel: true,
          },
        },
        frequencias: true,
      },
    });

    return pessoas.filter(pessoa => this.ehCrianca(pessoa)) as CriancaEntity[];
  }

  async findOne(id: bigint): Promise<CriancaEntity> {
    const pessoa = await this.prisma.pessoa.findUnique({
      where: { id_pessoa: id, ehCrianca: true },
      include: {
        familia: {
          include: {
            responsavel: true,
          },
        },
        frequencias: true,
      },
    });

    if (!pessoa) {
      throw new NotFoundException(`Criança com ID ${id} não encontrada`);
    }

    if (!this.ehCrianca(pessoa)) {
      throw new NotFoundException(`Pessoa com ID ${id} não é uma criança`);
    }

    return pessoa as CriancaEntity;
  }

  async create(criancaData: Prisma.PessoaCreateInput): Promise<CriancaEntity> {
    return await this.prisma.pessoa.create({
      data: criancaData,
      include: {
        familia: true,
      },
    });
  }

  async update(id: bigint, updateCriancaDto: UpdateCriancaDto): Promise<CriancaEntity> {
    // Verificar se a criança existe
    await this.findOne(id);

    return await this.prisma.pessoa.update({
      where: { id_pessoa: id },
      data: updateCriancaDto,
      include: {
        familia: {
          include: {
            responsavel: true,
          },
        },
        frequencias: true,
      },
    });
  }

  async remove(id: bigint): Promise<CriancaEntity> {
    // Verificar se a criança existe
    await this.findOne(id);

    return await this.prisma.pessoa.delete({
      where: { id_pessoa: id },
    });
  }

  async findByFamilia(id_familia: bigint): Promise<CriancaEntity[]> {
    const pessoas = await this.prisma.pessoa.findMany({
      where: { id_familia },
      include: {
        familia: {
          include: {
            responsavel: true,
          },
        },
      },
    });

    return pessoas.filter(pessoa => this.ehCrianca(pessoa)) as CriancaEntity[];
  }

  async findByResponsavel(id_responsavel: bigint): Promise<CriancaEntity[]> {
    const pessoas = await this.prisma.pessoa.findMany({
      where: {
        familia: {
          id_responsavel,
        },
      },
      include: {
        familia: {
          include: {
            responsavel: true,
          },
        },
      },
    });

    return pessoas.filter(pessoa => this.ehCrianca(pessoa)) as CriancaEntity[];
  }
}
