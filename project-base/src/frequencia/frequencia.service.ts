import { Injectable } from "@nestjs/common";
import { FrequenciaRepository } from "./repositories/frequencia.repository";
import { CreateFrequenciaDto } from "./dto/create-frequencia.dto";
import { UpdateFrequenciaDto } from "./dto/update-frequencia.dto";
import { Prisma } from "@prisma/client";
import { SnowflakeService } from "../snowflake/snowflake.service";

@Injectable()
export class FrequenciaService {
  constructor(
    private readonly repository: FrequenciaRepository,
    private readonly snowflakeService: SnowflakeService,
  ) {}

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: bigint) {
    return this.repository.findOne(id);
  }

  async create(createFrequenciaDto: CreateFrequenciaDto) {
    const id = this.snowflakeService.generate();

    const frequenciaData: Prisma.FrequenciaCreateInput = {
      id_frequencia: id,
      data: createFrequenciaDto.data,
      presenca: createFrequenciaDto.presenca,
      justificativa: createFrequenciaDto.justificativa || null,
      pessoa: {
        connect: {
          id_pessoa: BigInt(createFrequenciaDto.id_pessoa),
        },
      },
      atividade: {
        connect: {
          id_atividade: BigInt(createFrequenciaDto.id_atividade),
        },
      },
    };

    return this.repository.create(frequenciaData);
  }

  async update(id: bigint, updateFrequenciaDto: UpdateFrequenciaDto) {
    return this.repository.update(id, updateFrequenciaDto);
  }

  async remove(id: bigint) {
    return this.repository.remove(id);
  }

  async findByPessoa(id_pessoa: bigint) {
    return this.repository.findByPessoa(id_pessoa);
  }

  async findByAtividade(id_atividade: bigint) {
    return this.repository.findByAtividade(id_atividade);
  }

  async findByPeriodo(dataInicio: Date, dataFim: Date) {
    return this.repository.findByPeriodo(dataInicio, dataFim);
  }

  async findByPresenca(presenca: boolean) {
    return this.repository.findByPresenca(presenca);
  }

  async findByProfile(perfil: string, userId: bigint) {
    if (perfil === "admin") {
      // Admin pode ver todas as frequências
      return this.findAll();
    } else {
      // Usuário comum só pode ver frequências de suas próprias atividades
      // Esta lógica pode ser adaptada conforme necessário
      return this.findAll();
    }
  }

  async generateReport(filter: any) {
    const { id_pessoa, id_atividade, dataInicio, dataFim, presenca } = filter;

    if (id_pessoa) {
      return this.findByPessoa(BigInt(id_pessoa));
    }

    if (id_atividade) {
      return this.findByAtividade(BigInt(id_atividade));
    }

    if (dataInicio && dataFim) {
      return this.findByPeriodo(new Date(dataInicio), new Date(dataFim));
    }

    if (presenca !== undefined) {
      return this.findByPresenca(presenca === "true");
    }

    return this.findAll();
  }
}
