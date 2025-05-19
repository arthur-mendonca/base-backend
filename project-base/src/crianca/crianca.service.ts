import { Injectable } from "@nestjs/common";
import { CriancaRepository } from "./repositories/crianca.repository";
import { CreateCriancaDto } from "./dto/create-crianca.dto";
import { UpdateCriancaDto } from "./dto/update-crianca.dto";

@Injectable()
export class CriancaService {
  constructor(private readonly repository: CriancaRepository) {}

  async create(createCriancaDto: CreateCriancaDto) {
    return this.repository.create(createCriancaDto);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    return this.repository.findOne(id);
  }

  async update(id: number, updateCriancaDto: UpdateCriancaDto) {
    return this.repository.update(id, updateCriancaDto);
  }

  async remove(id: number) {
    return this.repository.remove(id);
  }

  async findCriancaWithResponsavel(id: number) {
    return this.repository.findCriancaWithResponsavel(id);
  }
}
