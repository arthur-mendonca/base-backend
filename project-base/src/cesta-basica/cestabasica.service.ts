import { Injectable } from "@nestjs/common";
import { CestaBasicaRepository } from "./repositories/cestabasica.repository";
import { CreateCestaBasicaDto } from "./dto/create-cestabasica.dto";
import { UpdateCestaBasicaDto } from "./dto/update-cestabasica.dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class CestaBasicaService {
   private prisma = new PrismaClient();
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
  async findByProfile(perfil: string) {
    // Implementar lógica de filtragem conforme o perfil
    return this.prisma.cestaBasica.findMany({
      where: {
        // Condições baseadas no perfil
      },
    });
  }
  async generateReport(filter: any) {
    // Implementar lógica para gerar relatórios
    return this.prisma.cestaBasica.findMany({
      where: {
        // Condições de filtro
      },
    });
  }
}
