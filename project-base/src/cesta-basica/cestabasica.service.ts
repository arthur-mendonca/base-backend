import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CestaBasica } from './cestabasica.entity';

@Injectable()
export class CestaBasicaService {
  constructor(
    @InjectRepository(CestaBasica)
    private cestaBasicaRepository: Repository<CestaBasica>,
  ) {}

  async create(cestaBasica: CestaBasica): Promise<CestaBasica> {
    return this.cestaBasicaRepository.save(cestaBasica);
  }

  async findAll(): Promise<CestaBasica[]> {
    return this.cestaBasicaRepository.find({ relations: ['responsavel'] });
  }

  async findOne(id: number): Promise<CestaBasica | null> {
    return this.cestaBasicaRepository.findOne({
      where: { id_cesta: id },
      relations: ['responsavel'],
    });
  }

  async update(id: number, cestaBasica: CestaBasica): Promise<CestaBasica | null> {
    await this.cestaBasicaRepository.update(id, cestaBasica);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.cestaBasicaRepository.delete(id);
  }
}