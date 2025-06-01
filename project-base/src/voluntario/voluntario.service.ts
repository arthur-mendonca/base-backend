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

   async findByProfile(perfil: string, userId: number) {
   if (perfil === 'admin') {
      // Admin pode ver todos os voluntários
      return this.prisma.voluntario.findMany();
    } else {
      // Para outros perfis, você pode definir uma lógica de filtragem
      // Exemplo: retornar apenas voluntários que estão ativos ou que têm uma área de atuação específica
      return this.prisma.voluntario.findMany({
        where: {
          // Adicione condições específicas para outros perfis, se necessário
          // Exemplo: area_atuacao: 'Educação' (ou qualquer outra lógica que faça sentido)
          // Aqui, você pode filtrar por área de atuação ou por disponibilidade
          disponibilidade: 'Ativo', // Supondo que você tenha um campo de disponibilidade
        },
      });
    }
  }

 async generateReport(filter: any) {
   const { area_atuacao, disponibilidade } = filter;
    const whereConditions: any = {};
    if (area_atuacao) {
      whereConditions.area_atuacao = area_atuacao;
    }
    if (disponibilidade) {
      whereConditions.disponibilidade = disponibilidade;
    }
    return this.prisma.voluntario.findMany({
      where: whereConditions,
    });
  }
}
