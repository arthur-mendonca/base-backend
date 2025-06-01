import { Injectable } from "@nestjs/common";
import { VoluntarioRepository } from "./repositories/voluntario.repository";
import { CreateVoluntarioDto } from "./dto/create-voluntario.dto";
import { UpdateVoluntarioDto } from "./dto/update-voluntario.dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class VoluntarioService {
   private prisma = new PrismaClient();
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

   async findByProfile(perfil: string) {
    // Implementar lógica de filtragem conforme o perfil
    return this.prisma.voluntario.findMany({
      where: {
        // Condições baseadas no perfil
      },
    });
  }

  // Função para gerar relatórios
  async generateReport(filter: any) {
    // Aqui você pode implementar a lógica para gerar relatórios
    // Por exemplo, filtrar por data, presença, etc.
    return this.prisma.voluntario.findMany({
      where: {
        // Adicione suas condições de filtro aqui
      },
    });
  }
}
