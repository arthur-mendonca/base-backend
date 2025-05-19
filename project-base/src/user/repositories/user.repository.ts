import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateUserDto } from "../dto/create-user-dto";
import { UpdateUserDto } from "../dto/update-user-dto";
import { UserEntity } from "../entity/user.entity";

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<UserEntity[]> {
    return this.prisma.usuario.findMany();
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.prisma.usuario.findUnique({
      where: { id_usuario: id },
    });

    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }

    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.prisma.usuario.create({
      data: createUserDto,
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    // Verificar se o usuário existe
    await this.findOne(id);

    return this.prisma.usuario.update({
      where: { id_usuario: id },
      data: updateUserDto,
    });
  }

  async remove(id: number): Promise<UserEntity> {
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
