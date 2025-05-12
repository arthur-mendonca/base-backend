import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Crianca } from './crianca.entity';
import { Responsavel } from '../responsavel/responsavel.entity';
import { CriancaDto } from './crianca.dto';

@Injectable()
export class CriancaService {
  constructor(
    @InjectRepository(Crianca)
    private readonly criancaRepository: Repository<Crianca>,

    @InjectRepository(Responsavel)
    private readonly responsavelRepository: Repository<Responsavel>,
  ) {}

  async create(criancaDto: CriancaDto): Promise<Crianca> {
    const responsavel = await this.responsavelRepository.findOne({
      where: { id_responsavel: criancaDto.id_responsavel },
    });

    if (!responsavel) {
      throw new NotFoundException('Responsável não encontrado');
    }

    const novaCrianca = this.criancaRepository.create({
      nome: criancaDto.nome,
      data_nascimento: criancaDto.data_nascimento,
      rg: criancaDto.rg,
      cpf: criancaDto.cpf,
      responsavel: responsavel,
    });

    return this.criancaRepository.save(novaCrianca);
  }

  async findAll(): Promise<Crianca[]> {
    return this.criancaRepository.find({
      relations: ['responsavel', 'frequencias'],
    });
  }

  async findOne(id: number): Promise<Crianca> {
    const crianca = await this.criancaRepository.findOne({
      where: { id_crianca: id },
      relations: ['responsavel', 'frequencias'],
    });

    if (!crianca) {
      throw new NotFoundException(`Criança com ID ${id} não encontrada`);
    }

    return crianca;
  }

  async update(id: number, criancaAtualizada: Partial<Crianca>): Promise<Crianca> {
    await this.criancaRepository.update(id, criancaAtualizada);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const crianca = await this.findOne(id);
    await this.criancaRepository.remove(crianca);
  }
}
