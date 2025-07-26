import { Injectable } from "@nestjs/common";
import { CreatePessoaDto } from "./dto/create-pessoa.dto";
import { UpdatePessoaDto } from "./dto/update-pessoa.dto";
import { PessoaRepository } from "./repositories/pessoa.repository";
import { Prisma } from "@prisma/client";
import { SnowflakeService } from "../snowflake/snowflake.service";

@Injectable()
export class PessoaService {
  constructor(
    private readonly repository: PessoaRepository,
    private readonly snowflakeService: SnowflakeService,
  ) {}

  async create(createPessoaDto: CreatePessoaDto) {
    const id = this.snowflakeService.generate();

    const hoje = new Date();
    const nascimento = new Date(createPessoaDto.data_nascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }

    const pessoaData: Prisma.PessoaCreateInput = {
      id_pessoa: id,
      nome: createPessoaDto.nome,
      data_nascimento: createPessoaDto.data_nascimento,
      rg: createPessoaDto.rg || null,
      cpf: createPessoaDto.cpf || null,
      foto_url: createPessoaDto.foto_url || null,
      observacoes: createPessoaDto.observacoes || null,
      ehCrianca: idade < 18,
      familia: {
        connect: {
          id_familia: BigInt(createPessoaDto.id_familia),
        },
      },
    };

    return this.repository.create(pessoaData);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: bigint) {
    return this.repository.findOne(id);
  }

  async update(id: bigint, updatePessoaDto: UpdatePessoaDto) {
    return this.repository.update(id, updatePessoaDto);
  }

  async remove(id: bigint) {
    return this.repository.remove(id);
  }

  async findByFamilia(id_familia: bigint) {
    return this.repository.findByFamilia(id_familia);
  }

  async findByResponsavel(id_responsavel: bigint) {
    return this.repository.findByResponsavel(id_responsavel);
  }

  async findByNome(nome: string) {
    return this.repository.findByNome(nome);
  }

  async findByIdade(idadeMin: number, idadeMax: number) {
    return this.repository.findByIdade(idadeMin, idadeMax);
  }

  async findByDocumento(documento: string) {
    return this.repository.findByDocumento(documento);
  }

  async findByProfile(perfil: string, userId: bigint) {
    if (perfil === "admin") {
      // Admin pode ver todas as pessoas
      return this.findAll();
    } else {
      // Usuário comum só pode ver pessoas de suas próprias famílias
      return this.findByResponsavel(userId);
    }
  }

  async generateReport(filter: any) {
    const { dataInicio, dataFim, idFamilia, idadeMin, idadeMax } = filter;

    let pessoas = await this.findAll();

    if (dataInicio && dataFim) {
      const inicio = new Date(dataInicio);
      const fim = new Date(dataFim);

      pessoas = pessoas.filter(pessoa => {
        const dataNascimento = new Date(pessoa.data_nascimento);
        return dataNascimento >= inicio && dataNascimento <= fim;
      });
    }

    if (idFamilia) {
      pessoas = pessoas.filter(pessoa => pessoa.id_familia === BigInt(idFamilia));
    }

    if (idadeMin !== undefined && idadeMax !== undefined) {
      const idadeMinNum = Number(idadeMin);
      const idadeMaxNum = Number(idadeMax);

      const hoje = new Date();
      pessoas = pessoas.filter(pessoa => {
        const dataNascimento = new Date(pessoa.data_nascimento);
        let idade = hoje.getFullYear() - dataNascimento.getFullYear();
        const m = hoje.getMonth() - dataNascimento.getMonth();

        if (m < 0 || (m === 0 && hoje.getDate() < dataNascimento.getDate())) {
          idade--;
        }

        return idade >= idadeMinNum && idade <= idadeMaxNum;
      });
    }

    return pessoas;
  }
}
