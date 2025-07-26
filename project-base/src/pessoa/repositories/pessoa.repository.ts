import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { UpdatePessoaDto } from "../dto/update-pessoa.dto";
import { PessoaEntity } from "../entity/pessoa.entity";
import { Prisma } from "@prisma/client";

@Injectable()
export class PessoaRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<PessoaEntity[]> {
    return await this.prisma.pessoa.findMany({
      where: { ehCrianca: false },
      include: {
        familia: {
          include: {
            responsavel: true,
          },
        },
        frequencias: true,
      },
      orderBy: {
        nome: "asc",
      },
    });
  }

  async findOne(id: bigint): Promise<PessoaEntity> {
    const pessoa = await this.prisma.pessoa.findUnique({
      where: { id_pessoa: id },
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
      throw new NotFoundException(`Pessoa com ID ${id} não encontrada`);
    }

    return pessoa;
  }

  async create(pessoaData: Prisma.PessoaCreateInput): Promise<PessoaEntity> {
    return await this.prisma.pessoa.create({
      data: pessoaData,
      include: {
        familia: true,
      },
    });
  }

  async update(id: bigint, updatePessoaDto: UpdatePessoaDto): Promise<PessoaEntity> {
    // Verificar se a pessoa existe
    await this.findOne(id);

    return await this.prisma.pessoa.update({
      where: { id_pessoa: id },
      data: updatePessoaDto,
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

  async remove(id: bigint): Promise<PessoaEntity> {
    // Verificar se a pessoa existe
    await this.findOne(id);

    return await this.prisma.pessoa.delete({
      where: { id_pessoa: id },
    });
  }

  async findByFamilia(id_familia: bigint): Promise<PessoaEntity[]> {
    return await this.prisma.pessoa.findMany({
      where: { id_familia },
      include: {
        familia: {
          include: {
            responsavel: true,
          },
        },
      },
      orderBy: {
        nome: "asc",
      },
    });
  }

  async findByResponsavel(id_responsavel: bigint): Promise<PessoaEntity[]> {
    return await this.prisma.pessoa.findMany({
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
      orderBy: {
        nome: "asc",
      },
    });
  }

  async findByNome(nome: string): Promise<PessoaEntity[]> {
    return await this.prisma.pessoa.findMany({
      where: {
        nome: {
          contains: nome,
          mode: "insensitive",
        },
      },
      include: {
        familia: {
          include: {
            responsavel: true,
          },
        },
      },
      orderBy: {
        nome: "asc",
      },
    });
  }

  async findByIdade(idadeMin: number, idadeMax: number): Promise<PessoaEntity[]> {
    const hoje = new Date();
    const anoMin = hoje.getFullYear() - idadeMax;
    const anoMax = hoje.getFullYear() - idadeMin;

    const dataMin = new Date(anoMin, hoje.getMonth(), hoje.getDate());
    const dataMax = new Date(anoMax, hoje.getMonth(), hoje.getDate());

    return await this.prisma.pessoa.findMany({
      where: {
        data_nascimento: {
          gte: dataMin,
          lte: dataMax,
        },
      },
      include: {
        familia: {
          include: {
            responsavel: true,
          },
        },
      },
      orderBy: {
        nome: "asc",
      },
    });
  }

  async findByDocumento(documento: string): Promise<PessoaEntity[]> {
    return await this.prisma.pessoa.findMany({
      where: {
        OR: [
          {
            cpf: {
              contains: documento,
            },
          },
          {
            rg: {
              contains: documento,
            },
          },
        ],
      },
      include: {
        familia: {
          include: {
            responsavel: true,
          },
        },
      },
    });
  }
}
