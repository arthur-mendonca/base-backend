import { Injectable } from "@nestjs/common";
import { CreateFamiliaDto } from "./dto/create-familia.dto";
import { FamiliaRepository } from "./repositories/familia.repository";
import { UpdateFamiliaDto } from "./dto/update-familia.dto";
import { Prisma } from "@prisma/client";
import { SnowflakeService } from "src/snowflake/snowflake.service";

@Injectable()
export class FamiliaService {
  constructor(
    private readonly repository: FamiliaRepository,
    private readonly snowflakeService: SnowflakeService,
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

  async findOne(id: bigint) {
    return this.repository.findOne(id);
  }

  async update(id: bigint, updateFamiliaDto: UpdateFamiliaDto) {
    return this.repository.update(id, updateFamiliaDto);
  }

  async remove(id: bigint) {
    return this.repository.remove(id);
  }
}
