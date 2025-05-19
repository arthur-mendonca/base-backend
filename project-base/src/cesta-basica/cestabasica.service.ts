import { Injectable } from "@nestjs/common";
import { CestaBasicaRepository } from "./repositories/cestabasica.repository";
import { CreateCestaBasicaDto } from "./dto/create-cestabasica-dto";
import { UpdateCestaBasicaDto } from "./dto/update-cestabasica-dto";

@Injectable()
export class CestaBasicaService {
  constructor(private readonly repository: CestaBasicaRepository) {}

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    return this.repository.findOne(id);
  }

  async create(createCestaBasicaDto: CreateCestaBasicaDto) {
    return this.repository.create(createCestaBasicaDto);
  }

  async update(id: number, updateCestaBasicaDto: UpdateCestaBasicaDto) {
    return this.repository.update(id, updateCestaBasicaDto);
  }

  async remove(id: number) {
    return this.repository.remove(id);
  }
}
