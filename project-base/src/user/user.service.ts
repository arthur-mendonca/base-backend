// src/usuario/usuario.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usuarioRepository: Repository<User>,
    ) { }

    async create(usuario: User): Promise<User> {
        return this.usuarioRepository.save(usuario);
    }

    async findAll(): Promise<User[]> {
        return this.usuarioRepository.find();
    }

    async findOne(id: number): Promise<User | null> {
        return this.usuarioRepository.findOne({
            where: { id_usuario: id },
        });
    }

    async update(id: number, usuario: User): Promise<User | null> {
        await this.usuarioRepository.update(id, usuario);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.usuarioRepository.delete(id);
    }
}