import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Voluntario } from './voluntario.entity';

@Injectable()
export class VoluntarioService {
    constructor(
        @InjectRepository(Voluntario)
        private voluntarioRepository: Repository<Voluntario>,
    ) { }

    async create(voluntario: Voluntario): Promise<Voluntario> {
        return this.voluntarioRepository.save(voluntario);
    }

    async findAll(): Promise<Voluntario[]> {
        return this.voluntarioRepository.find();
    }

    async findOne(id: number): Promise<Voluntario | null> {
        return this.voluntarioRepository.findOne({
            where: { id_voluntario: id },
        });
    }

    async update(id: number, voluntario: Voluntario): Promise<Voluntario | null> {
        await this.voluntarioRepository.update(id, voluntario);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.voluntarioRepository.delete(id);
    }
}