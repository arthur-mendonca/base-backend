import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { UpdateVoluntarioDto } from "../dto/update-voluntario.dto";
import { VoluntarioEntity } from "../entity/voluntario.entity";
import { Prisma } from "@prisma/client";

@Injectable()
export class VoluntarioRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<VoluntarioEntity[]> {
    return await this.prisma.voluntario.findMany({
      include: {
        atividades_realizadas: true,
      },
      orderBy: {
        nome: "asc",
      },
    });
  }

  async findOne(id: bigint): Promise<VoluntarioEntity> {
    const voluntario = await this.prisma.voluntario.findUnique({
      where: { id_voluntario: id },
      include: {
        atividades_realizadas: true,
      },
    });

    if (!voluntario) {
      throw new NotFoundException(`Voluntário com ID ${id} não encontrado`);
    }

    return voluntario;
  }

  async create(voluntarioData: Prisma.VoluntarioCreateInput): Promise<VoluntarioEntity> {
    return await this.prisma.voluntario.create({
      data: voluntarioData,
      include: {
        atividades_realizadas: true,
      },
    });
  }

  async update(id: bigint, updateVoluntarioDto: UpdateVoluntarioDto): Promise<VoluntarioEntity> {
    // Verificar se o voluntário existe
    await this.findOne(id);

    return await this.prisma.voluntario.update({
      where: { id_voluntario: id },
      data: updateVoluntarioDto,
      include: {
        atividades_realizadas: true,
      },
    });
  }

  async remove(id: bigint): Promise<VoluntarioEntity> {
    // Verificar se o voluntário existe
    await this.findOne(id);

    return await this.prisma.voluntario.delete({
      where: { id_voluntario: id },
    });
  }

  async findByCpf(cpf: string): Promise<VoluntarioEntity | null> {
    const voluntario = await this.prisma.voluntario.findUnique({
      where: { cpf },
      include: {
        atividades_realizadas: true,
      },
    });

    return voluntario;
  }

  async findByEmail(email: string): Promise<VoluntarioEntity[]> {
    return await this.prisma.voluntario.findMany({
      where: { email },
      include: {
        atividades_realizadas: true,
      },
    });
  }

  async findByAreaAtuacao(area: string): Promise<VoluntarioEntity[]> {
    return await this.prisma.voluntario.findMany({
      where: {
        area_atuacao: {
          contains: area,
          mode: "insensitive",
        },
      },
      include: {
        atividades_realizadas: true,
      },
      orderBy: {
        nome: "asc",
      },
    });
  }

  async findByDisponibilidade(disponibilidade: string): Promise<VoluntarioEntity[]> {
    return await this.prisma.voluntario.findMany({
      where: {
        disponibilidade: {
          contains: disponibilidade,
          mode: "insensitive",
        },
      },
      include: {
        atividades_realizadas: true,
      },
      orderBy: {
        nome: "asc",
      },
    });
  }

  async findRecentlyCadastrados(days: number = 30): Promise<VoluntarioEntity[]> {
    const date = new Date();
    date.setDate(date.getDate() - days);

    return await this.prisma.voluntario.findMany({
      where: {
        data_cadastro: {
          gte: date,
        },
      },
      include: {
        atividades_realizadas: true,
      },
      orderBy: {
        data_cadastro: "desc",
      },
    });
  }

  async findByNome(nome: string): Promise<VoluntarioEntity[]> {
    return await this.prisma.voluntario.findMany({
      where: {
        nome: {
          contains: nome,
          mode: "insensitive",
        },
      },
      include: {
        atividades_realizadas: true,
      },
      orderBy: {
        nome: "asc",
      },
    });
  }

  async findByStatus(status: boolean): Promise<VoluntarioEntity[]> {
    return await this.prisma.voluntario.findMany({
      where: { aceitou_termos: status },
      include: {
        atividades_realizadas: true,
      },
      orderBy: {
        nome: "asc",
      },
    });
  }

  // NOVOS MÉTODOS PARA CONSULTAS ESPECÍFICAS - Implementação da 5ª quinzena
  async findByAtividade(nomeAtividade: string): Promise<VoluntarioEntity[]> {
    // Simulação de busca de voluntários por atividade
    // Em ambiente real, usaria:
    // return await this.prisma.voluntario.findMany({
    //   where: {
    //     area_atuacao: {
    //       contains: nomeAtividade,
    //       mode: "insensitive",
    //     },
    //     aceitou_termos: true,
    //   },
    //   include: {
    //     atividades_realizadas: true,
    //   },
    //   orderBy: {
    //     nome: "asc",
    //   },
    // });

    // Dados simulados para demonstração
    const voluntariosSimulados: VoluntarioEntity[] = [
      {
        id_voluntario: BigInt(1),
        nome: "Maria Silva",
        cpf: "123.456.789-01",
        rg: "12.345.678-9",
        endereco: "Rua das Flores, 123",
        email: "maria@email.com",
        telefone: "(11) 99999-9999",
        disponibilidade: "Manhã e tarde",
        area_atuacao: "Reforço escolar, Esportes",
        tem_antecedentes: false,
        url_comprovante: null,
        respondeu_questionario: true,
        aceitou_termos: true,
        data_cadastro: new Date("2024-01-15"),
      } as VoluntarioEntity,
      {
        id_voluntario: BigInt(2),
        nome: "João Santos",
        cpf: "987.654.321-01",
        rg: "98.765.432-1",
        endereco: "Av. Principal, 456",
        email: "joao@email.com",
        telefone: "(11) 88888-8888",
        disponibilidade: "Tarde",
        area_atuacao: "Música, Arte",
        tem_antecedentes: false,
        url_comprovante: null,
        respondeu_questionario: true,
        aceitou_termos: true,
        data_cadastro: new Date("2024-02-20"),
      } as VoluntarioEntity,
    ];

    // Filtrar por atividade
    return voluntariosSimulados.filter(voluntario => 
      voluntario.area_atuacao.toLowerCase().includes(nomeAtividade.toLowerCase())
    );
  }

  async findVoluntariosComEstatisticas(): Promise<any[]> {
    // Simulação de voluntários com estatísticas
    const voluntarios = await this.findAll();

    const voluntariosComEstatisticas = voluntarios.map((voluntario) => {
      // Simulação de estatísticas baseadas na área de atuação
      const atividadesSimuladas = voluntario.area_atuacao.split(',').map(a => a.trim());
      const totalAulas = Math.floor(Math.random() * 50) + 10; // 10-60 aulas
      const totalPresencas = Math.floor(totalAulas * (0.7 + Math.random() * 0.3)); // 70-100% de presença

      return {
        ...voluntario,
        estatisticas: {
          atividadesAssociadas: atividadesSimuladas,
          totalAtividadesAssociadas: atividadesSimuladas.length,
          totalPresencasRegistradas: totalPresencas,
          totalAulasRegistradas: totalAulas,
          percentualPresenca: totalAulas > 0 ? (totalPresencas / totalAulas) * 100 : 0,
        },
      };
    });

    return voluntariosComEstatisticas;
  }

  async findVoluntariosPorPeriodoAtividade(dataInicio: Date, dataFim: Date, atividade?: string): Promise<any[]> {
    // Simulação de consulta por período e atividade
    const atividadesSimuladas = [
      {
        nomeAtividade: "Reforço escolar",
        voluntarios: await this.findByAtividade("Reforço escolar"),
        totalAulas: 45,
        totalPresencas: 38,
        criancasAtendidas: 15,
        percentualPresenca: 84.4,
      },
      {
        nomeAtividade: "Esportes",
        voluntarios: await this.findByAtividade("Esportes"),
        totalAulas: 32,
        totalPresencas: 29,
        criancasAtendidas: 20,
        percentualPresenca: 90.6,
      },
      {
        nomeAtividade: "Música",
        voluntarios: await this.findByAtividade("Música"),
        totalAulas: 28,
        totalPresencas: 25,
        criancasAtendidas: 12,
        percentualPresenca: 89.3,
      },
    ];

    // Filtrar por atividade se especificada
    if (atividade) {
      return atividadesSimuladas.filter(a => 
        a.nomeAtividade.toLowerCase().includes(atividade.toLowerCase())
      );
    }

    return atividadesSimuladas;
  }
}
