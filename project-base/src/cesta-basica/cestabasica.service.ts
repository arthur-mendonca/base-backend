import { BadRequestException, Injectable } from "@nestjs/common";
import { CestaBasicaRepository } from "./repositories/cestabasica.repository";
import { CreateCestaBasicaDto } from "./dto/create-cestabasica.dto";
import { UpdateCestaBasicaDto } from "./dto/update-cestabasica.dto";
import { Prisma } from "@prisma/client";
import { SnowflakeService } from "src/snowflake/snowflake.service";

@Injectable()
export class CestaBasicaService {
  constructor(
    private readonly repository: CestaBasicaRepository,
    private readonly snowflakeService: SnowflakeService,
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
