import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Frequencia } from './frequencia.entity';

@Injectable()
export class FrequenciaService {
  constructor(
    @InjectRepository(Frequencia)
    private frequenciaRepository: Repository<Frequencia>,
  ) {}

  async create(frequencia: Frequencia): Promise<Frequencia> {
    return this.frequenciaRepository.save(frequencia);
  }

  async findAll(): Promise<Frequencia[]> {
    return this.frequenciaRepository.find({ relations: ['crianca'] });
  }

  async findOne(id: number): Promise<Frequencia | null> {
    return this.frequenciaRepository.findOne({
      where: { id_frequencia: id },
      relations: ['crianca'],
    });
  }

  async update(id: number, frequencia: Frequencia): Promise<Frequencia | null> {
    await this.frequenciaRepository.update(id, frequencia);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.frequenciaRepository.delete(id);
  }
}