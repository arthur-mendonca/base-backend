import { Injectable } from "@nestjs/common";
import { VoluntarioRepository } from "./repositories/voluntario.repository";
import { CreateVoluntarioDto } from "./dto/create-voluntario.dto";
import { UpdateVoluntarioDto } from "./dto/update-voluntario.dto";
import { Prisma } from "@prisma/client";
import { SnowflakeService } from "src/snowflake/snowflake.service";

@Injectable()
export class VoluntarioService {
  constructor(
    private readonly repository: VoluntarioRepository,
    private readonly snowflakeService: SnowflakeService,
  ) {}

  async create(createVoluntarioDto: CreateVoluntarioDto) {
    const id = this.snowflakeService.generate();

    const voluntarioData: Prisma.VoluntarioCreateInput = {
      ...createVoluntarioDto,
      id_voluntario: id,
    };
    return this.repository.create(voluntarioData);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: bigint) {
    return this.repository.findOne(id);
  }

  async update(id: bigint, updateVoluntarioDto: UpdateVoluntarioDto) {
    return this.repository.update(id, updateVoluntarioDto);
  }

  async remove(id: bigint) {
    return this.repository.remove(id);
  }

  async findByProfile(perfil: string) {
    const where: Prisma.VoluntarioWhereInput = {};

    if (perfil !== "admin") {
      // Para outros perfis, você pode definir uma lógica de filtragem
      // Exemplo: retornar apenas voluntários que estão ativos
      where.disponibilidade = "Ativo"; // Supondo que você tenha um campo de disponibilidade
    }
    // Se for admin, o 'where' fica vazio, buscando todos.
    return this.repository.findManyByFilter(where);
  }

  async generateReport(filter: { area_atuacao?: string; disponibilidade?: string }) {
    const { area_atuacao, disponibilidade } = filter;
    const whereConditions: Prisma.VoluntarioWhereInput = {};
    if (area_atuacao) {
      whereConditions.area_atuacao = area_atuacao;
    }
    if (disponibilidade) {
      whereConditions.disponibilidade = disponibilidade;
    }
    return this.repository.findManyByFilter(whereConditions);
  }
}
