import { ConflictException, Injectable } from "@nestjs/common";
import { CreateFamiliaDto } from "./dto/create-familia.dto";
import { FamiliaRepository } from "./repositories/familia.repository";
import { UpdateFamiliaDto } from "./dto/update-familia.dto";
import { Prisma } from "@prisma/client";
import { SnowflakeService } from "src/snowflake/snowflake.service";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class FamiliaService {
  constructor(
    private readonly repository: FamiliaRepository,
    private readonly snowflakeService: SnowflakeService,
    private readonly prisma: PrismaService,
  ) {}

  async create(createFamiliaDto: CreateFamiliaDto) {
    const id = this.snowflakeService.generate();

    const familiaData: Prisma.FamiliaCreateInput = {
      id_familia: id,
      nome: createFamiliaDto.nome,
      numero_dependentes: createFamiliaDto.numero_dependentes,
      observacoes: createFamiliaDto.observacoes ?? null,
      data_cadastro: new Date(),
      // NÃO inclua o campo 'responsavel' se não houver id_responsavel
    };

    if (createFamiliaDto.id_responsavel) {
      familiaData.responsavel = {
        connect: {
          id_responsavel: createFamiliaDto.id_responsavel,
        },
      };
    }

    return this.repository.create(familiaData);
  }
  async findAll() {
    return this.repository.findAll();
  }

  async getFamiliyDetails(id: bigint) {
    return this.repository.getFamiliyDetails(id);
  }

  async findOne(id: bigint) {
    return this.repository.findOne(id);
  }

  async update(id: bigint, updateFamiliaDto: UpdateFamiliaDto) {
    return this.repository.update(id, updateFamiliaDto);
  }

  async remove(id: bigint) {
    try {
      return await this.prisma.familia.delete({
        where: { id_familia: id },
      });
    } catch (error) {
      if (
        error.code === "P2003" || // Prisma foreign key constraint error
        error.message?.includes("Foreign key constraint")
      ) {
        throw new ConflictException(
          "Não é possível excluir a família porque existem pessoas ou crianças vinculadas. Remova os dependentes antes de excluir.",
        );
      }
      throw error;
    }
  }
}
