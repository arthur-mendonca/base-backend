import { Injectable } from "@nestjs/common";
import { VoluntarioRepository } from "./repositories/voluntario.repository";
import { CreateVoluntarioDto } from "./dto/create-voluntario-dto";
import { UpdateVoluntarioDto } from "./dto/update-voluntario-dto";

@Injectable()
export class VoluntarioService {
  constructor(private readonly repository: VoluntarioRepository) {}

  async create(createVoluntarioDto: CreateVoluntarioDto) {
    return this.repository.create(createVoluntarioDto);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    return this.repository.findOne(id);
  }

  async update(id: number, updateVoluntarioDto: UpdateVoluntarioDto) {
    return this.repository.update(id, updateVoluntarioDto);
  }

  async remove(id: number) {
    return this.repository.remove(id);
  }
}
