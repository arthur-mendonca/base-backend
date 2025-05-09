import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Crianca } from './crianca.entity';

@Injectable()
export class CriancaService {
  constructor(
    @InjectRepository(Crianca)
    private criancaRepository: Repository<Crianca>,
  ) {}

  async create(crianca: Crianca): Promise<Crianca> {
    return this.criancaRepository.save(crianca);
  }

  async findAll(): Promise<Crianca[]> {
    return this.criancaRepository.find({ relations: ['responsavel', 'frequencias'] });
  }

  async findOne(id: number): Promise<Crianca | null> {
    return this.criancaRepository.findOne({
      where: { id_crianca: id },
      relations: ['responsavel', 'frequencias'],
    });
  }

  async update(id: number, crianca: Crianca): Promise<Crianca | null> {
    await this.criancaRepository.update(id, crianca);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.criancaRepository.delete(id);
  }
}