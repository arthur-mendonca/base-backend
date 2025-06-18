import { Injectable } from "@nestjs/common";
import { FrequenciaRepository } from "./repositories/frequencia.repository";
import { CreateFrequenciaDto } from "./dto/create-frequencia.dto";
import { UpdateFrequenciaDto } from "./dto/update-frequencia.dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class FrequenciaService {
  private prisma = new PrismaClient();
  constructor(private readonly repository: FrequenciaRepository) { }

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
    if (perfil === 'admin') {
      return this.prisma.frequencia.findMany();
    } else {
      return this.prisma.frequencia.findMany({
        where: {
          // Adicione condições específicas para outros perfis, se necessário
          // Exemplo: id_crianca: userId
        },
      });
    }
  }
  
  async generateReport(filter: any) {
    const { atividade, data } = filter;
    const whereConditions: any = {};
    if (atividade) {
      whereConditions.atividade = atividade; // Filtra por atividade
    }
    if (data) {
      whereConditions.data = {
        gte: new Date(data), // Filtra por data maior ou igual
      };
    }
    return this.prisma.frequencia.findMany({
      where: whereConditions,
    });
  }
}
