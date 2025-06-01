import { Injectable } from "@nestjs/common";
import { FrequenciaRepository } from "./repositories/frequencia.repository";
import { CreateFrequenciaDto } from "./dto/create-frequencia.dto";
import { UpdateFrequenciaDto } from "./dto/update-frequencia.dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class FrequenciaService {
  private prisma = new PrismaClient(); 
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
  async findByProfile(perfil: string) {
    // Implementar lógica de filtragem conforme o perfil
    return this.prisma.frequencia.findMany({
      where: {
        // Condições baseadas no perfil
      },
    });
  }
  async generateReport(filter: any) {
    // Implementar lógica para gerar relatórios
    return this.prisma.frequencia.findMany({
      where: {
        // Condições de filtro
      },
    });
  }
}
