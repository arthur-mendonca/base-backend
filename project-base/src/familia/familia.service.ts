import { Injectable } from "@nestjs/common";
import { CreateFamiliaDto } from "./dto/create-familia.dto";
import { FamiliaRepository } from "./repositories/familia.repository";
import { UpdateFamiliaDto } from "./dto/update-familia.dto";

@Injectable()
export class FamiliaService {
  constructor(private readonly repository: FamiliaRepository) {}

  create(createFamiliaDto: CreateFamiliaDto) {
    return this.repository.create(createFamiliaDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateFamiliaDto: UpdateFamiliaDto) {
    return this.repository.update(id, updateFamiliaDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
