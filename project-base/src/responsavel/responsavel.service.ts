import { Injectable } from "@nestjs/common";
import { ResponsavelRepository } from "./repositories/responsavel.repository";
import { CreateResponsavelDto } from "./dto/create-responsavel.dto";
import { UpdateResponsavelDto } from "./dto/update-responsavel.dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class ResponsavelService {
  constructor(private readonly repository: ResponsavelRepository) { }
  private prisma = new PrismaClient();
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
    if (perfil === 'admin') {
      return this.prisma.responsavel.findMany();
    } else {
      return this.prisma.responsavel.findMany({
        where: {
          // Adicione condições específicas para outros perfis, se necessário
          // Exemplo: ocupacao: 'Professor' (ou qualquer outra lógica que faça sentido)
        },
      });
    }
  }

  async generateReport(filter: any) {
    const { parentesco_com_crianca, ocupacao } = filter;
    const whereConditions: any = {};
    if (parentesco_com_crianca) {
      whereConditions.parentesco_com_crianca = parentesco_com_crianca; // Filtra por parentesco
    }
    if (ocupacao) {
      whereConditions.ocupacao = ocupacao; // Filtra por ocupação
    }
    return this.prisma.responsavel.findMany({
      where: whereConditions,
    });
  }
}
