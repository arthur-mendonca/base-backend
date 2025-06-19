import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { UpdateUserDto } from "../dto/update-user.dto";
import { UserEntity } from "../entity/user.entity";
import { Prisma } from "@prisma/client";

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<UserEntity[]> {
    return this.prisma.usuario.findMany();
  }

  async findOne(id: bigint): Promise<UserEntity> {
    const user = await this.prisma.usuario.findUnique({
      where: { id_usuario: id },
    });

    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }

    return user;
  }

  async create(data: Prisma.UsuarioCreateInput): Promise<UserEntity> {
    return this.prisma.usuario.create({
      data,
    });
  }

  async update(id: bigint, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    // Verificar se o usuário existe
    await this.findOne(id);

    return this.prisma.usuario.update({
      where: { id_usuario: id },
      data: updateUserDto,
    });
  }

  async remove(id: bigint): Promise<UserEntity> {
    // Verificar se o usuário existe
    await this.findOne(id);

    return this.prisma.usuario.delete({
      where: { id_usuario: id },
    });
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.prisma.usuario.findUnique({
      where: { email },
    });

    return user;
  }
}
