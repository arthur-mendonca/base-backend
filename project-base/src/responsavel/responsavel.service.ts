import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Responsavel } from './responsavel.entity';

@Injectable()
export class ResponsavelService {
  constructor(
    @InjectRepository(Responsavel)
    private responsavelRepository: Repository<Responsavel>,
  ) {}

  async create(responsavel: Responsavel): Promise<Responsavel> {
    return this.responsavelRepository.save(responsavel);
  }

  async findAll(): Promise<Responsavel[]> {
    return this.responsavelRepository.find();
  }

  async findOne(id: number): Promise<Responsavel | null> {
    return this.responsavelRepository.findOne({ where: { id_responsavel: id } });
  }

  async update(id: number, responsavel: Responsavel): Promise<Responsavel | null> {
    await this.responsavelRepository.update(id, responsavel);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.responsavelRepository.delete(id);
  }
}