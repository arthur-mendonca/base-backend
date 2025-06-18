import { Injectable } from "@nestjs/common";
import { CestaBasicaRepository } from "./repositories/cestabasica.repository";
import { CreateCestaBasicaDto } from "./dto/create-cestabasica.dto";
import { UpdateCestaBasicaDto } from "./dto/update-cestabasica.dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class CestaBasicaService {
  private prisma = new PrismaClient();
  constructor(private readonly repository: CestaBasicaRepository) { }

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
    if (perfil === 'admin') {
      return this.prisma.cestaBasica.findMany();
    } else {
      return this.prisma.cestaBasica.findMany({
        where: {
          // Adicione condições específicas para outros perfis, se necessário
          // Exemplo: id_responsavel: userId
        },
      });
    }
  }
  
  async generateReport(filter: any) {
    const { data_entrega, quantidade } = filter;
    const whereConditions: any = {};
    if (data_entrega) {
      whereConditions.data_entrega = {
        gte: new Date(data_entrega), // Filtra por data de entrega maior ou igual
      };
    }
    if (quantidade) {
      whereConditions.quantidade = quantidade; // Filtra por quantidade
    }
    return this.prisma.cestaBasica.findMany({
      where: whereConditions,
    });
  }
}
