import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { CestaBasicaRepository } from "./repositories/cestabasica.repository";
import { CreateCestaBasicaDto } from "./dto/create-cestabasica.dto";
import { UpdateCestaBasicaDto } from "./dto/update-cestabasica.dto";
import { Prisma, TipoAtividade } from "@prisma/client";
import { SnowflakeService } from "src/snowflake/snowflake.service";
import { CriancaEntity } from "src/pessoa/crianca/entity/crianca.entity";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CestaBasicaService {
  constructor(
    private readonly repository: CestaBasicaRepository,
    private readonly snowflakeService: SnowflakeService,
    private readonly prisma: PrismaService,
  ) {}

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: bigint) {
    return this.repository.findOne(id);
  }

  async create(createCestaBasicaDto: CreateCestaBasicaDto) {
    // Validação: pelo menos um dos IDs (responsável ou beneficiário) deve ser preenchido
    if (!createCestaBasicaDto.id_responsavel && !createCestaBasicaDto.id_beneficiario) {
      throw new BadRequestException(
        "É necessário informar um responsável ou um beneficiário externo para a cesta básica",
      );
    }

    // VERIFICAR SE AS CRIANÇAS DA FAMÍLIA ESTÃO MATRICULADAS EM ESCOLA E PARTICIPANDO DE ATIVIDADES
    const id_responsavel = createCestaBasicaDto.id_responsavel;

    // Buscar a família e as crianças associadas
    const familia = await this.prisma.familia.findUnique({
      where: { id_responsavel },
      include: { pessoas: { where: { ehCrianca: true } } },
    });

    if (!familia) {
      throw new NotFoundException(`Família com responsável ID ${id_responsavel} não encontrada.`);
    }

    // PROIBIR FAMÍLIA DE RECEBER CESTA BÁSICA SE HOUVER EXCESSO DE FALTAS NÃO JUSTIFICADAS
    // if (!familia.elegivel_cesta_basica) {
    //   throw new ForbiddenException(
    //     "Esta família não está elegível para receber cestas básicas no momento devido a excesso de faltas em atividades.",
    //   );
    // }

    const criancas = familia.pessoas;

    if (criancas.length === 0) {
      throw new ForbiddenException("Esta família não possui crianças para receber a cesta básica.");
    }

    // PROIBIR RECEBER CESTA BÁSICA SE ALGUMA CRIANÇA NÃO ESTIVER MATRICULADA NA ESCOLA

    // const algumaCriancaMatriculada = criancas.some((c: CriancaEntity) => c.matriculada_escola);
    // if (!algumaCriancaMatriculada) {
    //   throw new ForbiddenException(`Nenhuma criança da família ${familia.nome} está matriculada em uma escola.`);
    // }

    const criancasEmAtividades = await this.prisma.frequencia.findMany({
      where: {
        id_pessoa: { in: criancas.map((c: CriancaEntity) => c.id_pessoa) },
        atividade: {
          tipo: {
            in: Object.values(TipoAtividade),
          },
        },
        presenca: true, // Consideramos apenas se há registros de presença
      },
      distinct: ["id_pessoa"],
    });

    if (criancasEmAtividades.length === 0) {
      throw new ForbiddenException("Nenhuma criança da família está participando de alguma atividade.");
    }

    const id = this.snowflakeService.generate();
    const { produtos, ...cestaData } = createCestaBasicaDto;

    // Prepara os dados para criação
    const cestaBasicaData: Prisma.CestaBasicaCreateInput = {
      id_cesta: id,
      data_entrega: cestaData.data_entrega,
      observacoes: cestaData.observacoes || null,
    };

    // Adiciona relações conforme os dados informados
    if (cestaData.id_responsavel) {
      cestaBasicaData.responsavel = {
        connect: {
          id_responsavel: BigInt(cestaData.id_responsavel),
        },
      };
    }

    if (cestaData.id_beneficiario) {
      cestaBasicaData.beneficiario_externo = {
        connect: {
          id_beneficiario: BigInt(cestaData.id_beneficiario),
        },
      };
    }

    if (cestaData.id_doacao) {
      cestaBasicaData.doacao_origem = {
        connect: {
          id_doacao: BigInt(cestaData.id_doacao),
        },
      };
    }

    return this.repository.create(cestaBasicaData, produtos);
  }

  async update(id: bigint, updateCestaBasicaDto: UpdateCestaBasicaDto) {
    return this.repository.update(id, updateCestaBasicaDto);
  }

  async remove(id: bigint) {
    return this.repository.remove(id);
  }

  async findByResponsavel(id_responsavel: bigint) {
    return this.repository.findByResponsavel(id_responsavel);
  }

  async findByBeneficiario(id_beneficiario: bigint) {
    return this.repository.findByBeneficiario(id_beneficiario);
  }

  async findByDoacao(id_doacao: bigint) {
    return this.repository.findByDoacao(id_doacao);
  }

  async findByPeriodo(dataInicio: Date, dataFim: Date) {
    return this.repository.findByPeriodo(dataInicio, dataFim);
  }

  async findByProfile(perfil: string, userId: bigint) {
    if (perfil === "admin") {
      // Admin pode ver todas as cestas
      return this.findAll();
    } else {
      // Usuário comum só pode ver suas próprias cestas
      return this.findByResponsavel(userId);
    }
  }

  async generateReport(filter: any) {
    const { dataInicio, dataFim, idResponsavel, idBeneficiario, idDoacao } = filter;

    if (dataInicio && dataFim) {
      return this.findByPeriodo(new Date(dataInicio), new Date(dataFim));
    }

    if (idResponsavel) {
      return this.findByResponsavel(BigInt(idResponsavel));
    }

    if (idBeneficiario) {
      return this.findByBeneficiario(BigInt(idBeneficiario));
    }

    if (idDoacao) {
      return this.findByDoacao(BigInt(idDoacao));
    }

    return this.findAll();
  }
}
