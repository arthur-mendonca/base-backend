import { Injectable } from "@nestjs/common";
import { AtividadeRepository } from "./repositories/atividade.repository";
import { CreateAtividadeDto } from "./dto/create-atividade.dto";
import { UpdateAtividadeDto } from "./dto/update-atividade.dto";
import { SnowflakeService } from "../snowflake/snowflake.service";

@Injectable()
export class AtividadeService {
  constructor(
    private readonly repository: AtividadeRepository,
    private readonly snowflakeService: SnowflakeService,
  ) {}

  async create(createAtividadeDto: CreateAtividadeDto) {
    const id = this.snowflakeService.generate();

    const atividadeData = {
      ...createAtividadeDto,
      id_atividade: id,
    };

    return this.repository.create(atividadeData);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: bigint) {
    return this.repository.findOne(id);
  }

  async update(id: bigint, updateAtividadeDto: UpdateAtividadeDto) {
    return this.repository.update(id, updateAtividadeDto);
  }

  async remove(id: bigint) {
    return this.repository.remove(id);
  }

  async findByTipo(tipo: string) {
    return this.repository.findByTipo(tipo);
  }

  async findByPublicoAlvo(publicoAlvo: string) {
    return this.repository.findByPublicoAlvo(publicoAlvo);
  }

  async findByDiaSemana(dia: string) {
    return this.repository.findByDiaSemana(dia);
  }
}
