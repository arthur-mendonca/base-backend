import { Injectable } from "@nestjs/common";
import { FrequenciaRepository } from "./repositories/frequencia.repository";
import { CreateFrequenciaDto } from "./dto/create-frequencia-dto";
import { UpdateFrequenciaDto } from "./dto/update-frequencia-dto";

@Injectable()
export class FrequenciaService {
  constructor(private readonly repository: FrequenciaRepository) {}

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    return this.repository.findOne(id);
  }

  async create(createFrequenciaDto: CreateFrequenciaDto) {
    return this.repository.create(createFrequenciaDto);
  }

  async update(id: number, updateFrequenciaDto: UpdateFrequenciaDto) {
    return this.repository.update(id, updateFrequenciaDto);
  }

  async remove(id: number) {
    return this.repository.remove(id);
  }

  async findByChildId(id_crianca: number) {
    return this.repository.findByChildId(id_crianca);
  }
}
