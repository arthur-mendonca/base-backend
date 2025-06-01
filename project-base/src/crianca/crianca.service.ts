import { Injectable } from "@nestjs/common";
import { CriancaRepository } from "./repositories/crianca.repository";
import { CreateCriancaDto } from "./dto/create-crianca.dto";
import { UpdateCriancaDto } from "./dto/update-crianca.dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class CriancaService {
  private prisma = new PrismaClient();
  constructor(private readonly repository: CriancaRepository) { }
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
  async findByProfile(perfil: string) {
    // Aqui você pode implementar a lógica para filtrar as crianças com base no perfil
    return this.prisma.crianca.findMany({
      where: {
        // Exemplo de filtro, ajuste conforme sua lógica
        // Se o perfil for "admin", retorna todas as crianças
        // Se for "usuario", retorna apenas as crianças associadas ao usuário
        // Adapte conforme sua lógica de negócios
        // Exemplo: { /* condição baseada no perfil */ }
      },
    });
  }
  async remove(id: number) {
    return this.repository.remove(id);
  }

  async findCriancaWithResponsavel(id: number) {
    return this.repository.findCriancaWithResponsavel(id);
  }
  // Função para gerar relatórios
  async generateReport(filter: any) {
    // Aqui você pode implementar a lógica para gerar relatórios
    // Por exemplo, filtrar por data, presença, etc.
    return this.prisma.crianca.findMany({
      where: {
        // Adicione suas condições de filtro aqui
      },
    });
  }
}
