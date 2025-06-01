import { Injectable } from "@nestjs/common";
import { ParceiroRepository } from "./repositories/parceiro.repository";
import { CreateParceiroDto } from "./dto/create-parceiro.dto";
import { UpdateParceiroDto } from "./dto/update-parceiro.dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class ParceiroService {
  private prisma = new PrismaClient();
  constructor(private readonly repository: ParceiroRepository) { }

  async create(createParceiroDto: CreateParceiroDto) {
    return this.repository.create(createParceiroDto);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    return this.repository.findOne(id);
  }

  async update(id: number, updateParceiroDto: UpdateParceiroDto) {
    return this.repository.update(id, updateParceiroDto);
  }

  async remove(id: number) {
    return this.repository.remove(id);
  }

  async findByProfile(perfil: string) {
    // Implementar lógica de filtragem conforme o perfil
    return this.prisma.parceiro.findMany({
      where: {
        // Condições baseadas no perfil
      },
    });
  }
  
  async generateReport(filter: any) {
    // Implementar lógica para gerar relatórios
    return this.prisma.parceiro.findMany({
      where: {
        // Condições de filtro
      },
    });
  }
}
