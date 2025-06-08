import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { UserEntity } from "../entity/user.entity";

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<UserEntity[]> {
   const users = await this.prisma.usuario.findMany();
    return users.map(user => ({
      ...user,
      ativo: 'ativo' in user ? (user as any).ativo : false, // Adiciona a propriedade 'ativo' com um valor padrão se existir
    }));
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.prisma.usuario.findUnique({
      where: { id_usuario: id },
    });

    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }

    return {
      ...user,
      ativo: 'ativo' in user ? (user as any).ativo : false, // Adiciona a propriedade 'ativo' com um valor padrão se não existir
    };
  }

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = await this.prisma.usuario.create({
      data: createUserDto,
    });
    return {
      ...user,
      ativo: 'ativo' in user ? (user as any).ativo : false, // Garante que 'ativo' está presente
    };
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    // Verificar se o usuário existe
    await this.findOne(id);

    const user = await this.prisma.usuario.update({
      where: { id_usuario: id },
      data: updateUserDto,
    });

    return {
      ...user,
      ativo: 'ativo' in user ? (user as any).ativo : false, // Garante que 'ativo' está presente
    };
  }

  async remove(id: number): Promise<UserEntity> {
    // Verificar se o usuário existe
    await this.findOne(id);

    const user = await this.prisma.usuario.delete({
      where: { id_usuario: id },
    });

    return {
      ...user,
      ativo: 'ativo' in user ? (user as any).ativo : false, // Garante que 'ativo' está presente
    };
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.prisma.usuario.findUnique({
      where: { email },
    });

    if (!user) {
      return null;
    }

    return {
      ...user,
      ativo: 'ativo' in user ? (user as any).ativo : false, // Garante que 'ativo' está presente
    };
  }
}
