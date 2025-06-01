import { Injectable } from "@nestjs/common";
import { ResponsavelRepository } from "./repositories/responsavel.repository";
import { CreateResponsavelDto } from "./dto/create-responsavel.dto";
import { UpdateResponsavelDto } from "./dto/update-responsavel.dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class ResponsavelService {
  constructor(private readonly repository: ResponsavelRepository) {}
  private prisma= new PrismaClient();
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

  async findByProfile(perfil: string) {
    // Implementar lógica de filtragem conforme o perfil
    return this.prisma.responsavel.findMany({
      where: {
        // Condições baseadas no perfil
      },
    });
  }
  
  async generateReport(filter: any) {
    // Implementar lógica para gerar relatórios
    return this.prisma.responsavel.findMany({
      where: {
        // Condições de filtro
      },
    });
  }
}
