import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { UpdateUserDto } from "../dto/update-user.dto";
import { UserEntity } from "../entity/user.entity";
import { Prisma } from "@prisma/client";

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.prisma.usuario.findMany({
      orderBy: {
        nome: "asc",
      },
    });
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
    return await this.prisma.usuario.create({
      data,
    });
  }

  async update(id: bigint, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    // Verificar se o usuário existe
    await this.findOne(id);

    return await this.prisma.usuario.update({
      where: { id_usuario: id },
      data: updateUserDto,
    });
  }

  async remove(id: bigint): Promise<UserEntity> {
    // Verificar se o usuário existe
    await this.findOne(id);

    return await this.prisma.usuario.delete({
      where: { id_usuario: id },
    });
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.prisma.usuario.findUnique({
      where: { email },
    });

    return user;
  }

  async findByPerfil(perfil: string): Promise<UserEntity[]> {
    return await this.prisma.usuario.findMany({
      where: {
        perfil: perfil as Prisma.Enumerable<any>,
      },
      orderBy: {
        nome: "asc",
      },
    });
  }

  async findByNome(nome: string): Promise<UserEntity[]> {
    return await this.prisma.usuario.findMany({
      where: {
        nome: {
          contains: nome,
          mode: "insensitive",
        },
      },
      orderBy: {
        nome: "asc",
      },
    });
  }

  async findRecentlyCreated(days: number = 30): Promise<UserEntity[]> {
    const date = new Date();
    date.setDate(date.getDate() - days);

    return await this.prisma.usuario.findMany({
      where: {
        data_cadastro: {
          gte: date,
        },
      },
      orderBy: {
        data_cadastro: "desc",
      },
    });
  }
}