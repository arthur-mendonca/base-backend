import { Injectable } from "@nestjs/common";
import { CestaBasicaRepository } from "./repositories/cestabasica.repository";
import { CreateCestaBasicaDto } from "./dto/create-cestabasica.dto";
import { UpdateCestaBasicaDto } from "./dto/update-cestabasica.dto";
import { Prisma, PrismaClient } from "@prisma/client";
import { SnowflakeService } from "src/snowflake/snowflake.service";

/**
 * Serviço de Cestas Básicas
 * Gerencia a lógica de negócio da distribuição de cestas básicas
 */
@Injectable()
export class CestaBasicaService {
  private prisma = new PrismaClient();
  constructor(
    private readonly repository: CestaBasicaRepository,
    private readonly snowflakeService: SnowflakeService,
  ) {}

  // Busca todas as cestas básicas entregues
  async findAll() {
    return this.repository.findAll();
  }

  // Busca uma cesta básica específica pelo ID
  async findOne(id: bigint) {
    return this.repository.findOne(id);
  }

  /**
   * Registra uma nova entrega de cesta básica
   * Conecta a cesta ao responsável pela família
   */
  async create(createCestaBasicaDto: CreateCestaBasicaDto) {
    // Gera um ID único para a cesta
    const id = this.snowflakeService.generate();

    const cestaBasicaData: Prisma.CestaBasicaCreateInput = {
      id_cesta: id,
      data_entrega: createCestaBasicaDto.data_entrega,
      quantidade: createCestaBasicaDto.quantidade,
      observacoes: createCestaBasicaDto.observacoes,
      responsavel: {
        connect: {
          id_responsavel: BigInt(createCestaBasicaDto.id_responsavel),
        },
      },
    };

    return this.repository.create(cestaBasicaData);
  }

  // Atualiza os dados de uma entrega de cesta básica
  async update(id: bigint, updateCestaBasicaDto: UpdateCestaBasicaDto) {
    return this.repository.update(id, updateCestaBasicaDto);
  }

  // Remove o registro de uma entrega de cesta básica
  async remove(id: bigint) {
    return this.repository.remove(id);
  }

  /**
   * Busca cestas básicas de acordo com o perfil do usuário
   * Admin vê todas, outros perfis podem ter filtros específicos
   */
  async findByProfile(perfil: string) {
    if (perfil === "admin") {
      return this.prisma.cestaBasica.findMany();
    } else {
      return this.prisma.cestaBasica.findMany({
        where: {
          // Adicione condições específicas para outros perfis, se necessário
          // Exemplo: id_responsavel: userId
        },
      });
    }
  }

  /**
   * Gera relatórios de entregas de cestas básicas
   * Pode filtrar por data de entrega e quantidade
   */
  async generateReport(filter: any) {
    const { data_entrega, quantidade } = filter;
    const whereConditions: any = {};
    if (data_entrega) {
      whereConditions.data_entrega = {
        gte: new Date(data_entrega), // Busca entregas a partir desta data
      };
    }
    if (quantidade) {
      whereConditions.quantidade = quantidade; // Busca pela quantidade específica
    }
    return this.prisma.cestaBasica.findMany({
      where: whereConditions,
    });
  }
}
