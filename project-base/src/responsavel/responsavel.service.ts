import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { ResponsavelRepository } from "./repositories/responsavel.repository";
import { CreateResponsavelDto } from "./dto/create-responsavel.dto";
import { UpdateResponsavelDto } from "./dto/update-responsavel.dto";
import { SnowflakeService } from "../snowflake/snowflake.service";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ResponsavelService {
  constructor(
    private readonly repository: ResponsavelRepository,
    private readonly snowflakeService: SnowflakeService,
    private readonly prisma: PrismaService,
  ) {}

  async create(createResponsavelDto: CreateResponsavelDto) {
    const { id_familia, ...responsavelData } = createResponsavelDto;

    // 1. Verificar se já existe um responsável com o mesmo CPF
    const responsavelExistente = await this.repository.findByCpf(responsavelData.cpf);
    if (responsavelExistente) {
      throw new ConflictException(`Já existe um responsável cadastrado com o CPF ${responsavelData.cpf}`);
    }

    // 2. Verificar se a família informada existe
    const familia = await this.prisma.familia.findUnique({
      where: { id_familia: BigInt(id_familia) },
    });

    if (!familia) {
      throw new NotFoundException(`A família com o ID ${id_familia} não foi encontrada.`);
    }

    // 3. Verificar se a família já possui um responsável vinculado
    if (familia.id_responsavel) {
      throw new ConflictException(`A família '${familia.nome}' já possui um responsável vinculado.`);
    }

    // Usar transação para garantir que ambas as operações sejam concluídas com sucesso
    return this.prisma.$transaction(async tx => {
      // 4. Criar o novo responsável
      const responsavelId = this.snowflakeService.generate();
      const novoResponsavel = await tx.responsavel.create({
        data: {
          ...responsavelData,
          id_responsavel: responsavelId,
        },
      });

      // 5. Atualizar a família com o ID do novo responsável
      await tx.familia.update({
        where: { id_familia: BigInt(id_familia) },
        data: { id_responsavel: novoResponsavel.id_responsavel },
      });

      // 6. Retornar o responsável criado com os dados da família
      return tx.responsavel.findUnique({
        where: { id_responsavel: novoResponsavel.id_responsavel },
        include: { familia: true },
      });
    });
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: bigint) {
    return this.repository.findOne(id);
  }

  async update(id: bigint, updateResponsavelDto: UpdateResponsavelDto) {
    // Se está atualizando o CPF, verificar se já existe outro responsável com este CPF
    if (updateResponsavelDto.cpf) {
      const existente = await this.repository.findByCpf(updateResponsavelDto.cpf);
      if (existente && existente.id_responsavel !== id) {
        throw new ConflictException(`Já existe um responsável cadastrado com o CPF ${updateResponsavelDto.cpf}`);
      }
    }

    return this.repository.update(id, updateResponsavelDto);
  }

  async remove(id: bigint) {
    return this.repository.remove(id);
  }

  async findByCpf(cpf: string) {
    return this.repository.findByCpf(cpf);
  }

  async findByNome(nome: string) {
    return this.repository.findByNome(nome);
  }

  async findByOcupacao(ocupacao: string) {
    return this.repository.findByOcupacao(ocupacao);
  }

  async findComFamilia() {
    return this.repository.findComFamilia();
  }

  async findSemFamilia() {
    return this.repository.findSemFamilia();
  }

  async findComCestas() {
    return this.repository.findComCestas();
  }

  async findByProfile(perfil: string) {
    if (perfil === "admin") {
      // Admin pode ver todos os responsáveis
      return this.findAll();
    } else {
      // Usuário comum pode ter acesso limitado
      // Esta é apenas uma implementação padrão, ajustar conforme necessário
      return this.findAll();
    }
  }

  async generateReport(filter: any) {
    const { nome, cpf, ocupacao, comFamilia, semFamilia, comCestas } = filter;

    if (cpf) {
      const responsavel = await this.findByCpf(cpf);
      return responsavel ? [responsavel] : [];
    }

    if (nome) {
      return this.findByNome(nome);
    }

    if (ocupacao) {
      return this.findByOcupacao(ocupacao);
    }

    if (comFamilia === "true") {
      return this.findComFamilia();
    }

    if (semFamilia === "true") {
      return this.findSemFamilia();
    }

    if (comCestas === "true") {
      return this.findComCestas();
    }

    return this.findAll();
  }
}
