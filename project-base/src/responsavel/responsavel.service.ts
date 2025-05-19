import { Injectable } from "@nestjs/common";
import { ResponsavelRepository } from "./repositories/responsavel.repository";
import { CreateResponsavelDto } from "./dto/create-responsavel-dto";
import { UpdateResponsavelDto } from "./dto/update-responsavel-dto";

@Injectable()
export class ResponsavelService {
  constructor(private readonly repository: ResponsavelRepository) {}

  async create(createResponsavelDto: CreateResponsavelDto) {
    return this.repository.create(createResponsavelDto);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    return this.repository.findOne(id);
  }

  async update(id: number, updateResponsavelDto: UpdateResponsavelDto) {
    return this.repository.update(id, updateResponsavelDto);
  }

  async remove(id: number) {
    return this.repository.remove(id);
  }
}
