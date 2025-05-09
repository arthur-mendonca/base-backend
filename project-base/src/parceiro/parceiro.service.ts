import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parceiro } from './parceiro.entity';

@Injectable()
export class ParceiroService {
  constructor(
    @InjectRepository(Parceiro)
    private parceiroRepository: Repository<Parceiro>,
  ) {}

  async create(parceiro: Parceiro): Promise<Parceiro> {
    return this.parceiroRepository.save(parceiro);
  }

  async findAll(): Promise<Parceiro[]> {
    return this.parceiroRepository.find();
  }

  async findOne(id: number): Promise<Parceiro | null> {
    return this.parceiroRepository.findOne({ where: { id_parceiro: id } });
  }

  async update(id: number, parceiro: Parceiro): Promise<Parceiro | null> {
    await this.parceiroRepository.update(id, parceiro);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.parceiroRepository.delete(id);
  }
}