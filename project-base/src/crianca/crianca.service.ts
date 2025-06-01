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
  async findByProfile(perfil: string, userId: number) {
    if (perfil === 'admin') {
      // Admin pode ver todas as crianças
      return this.prisma.crianca.findMany();
    } else {
      // Usuário comum só pode ver suas próprias crianças
      return this.prisma.crianca.findMany({
        where: {
          id_responsavel: userId, // Supondo que você tenha um campo que relaciona a criança ao responsável
        },
      });
    }
  }
  async remove(id: number) {
    return this.repository.remove(id);
  }

  async findCriancaWithResponsavel(id: number) {
    return this.repository.findCriancaWithResponsavel(id);
  }
  // Função para gerar relatórios
  async generateReport(filter: any) {
    const { data_nascimento, status_presenca } = filter;
    const whereConditions: any = {};
    if (data_nascimento) {
      whereConditions.data_nascimento = {
        gte: new Date(data_nascimento), // Filtra por data de nascimento maior ou igual
      };
    }
    if (status_presenca) {
      whereConditions.status_presenca = status_presenca; // Filtra por status de presença
    }
    return this.prisma.crianca.findMany({
      where: whereConditions,
    });
  }
}
