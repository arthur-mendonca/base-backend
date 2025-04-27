import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users') // Este é o caminho base para as rotas
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Rota para criar um usuário
  @Post()
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user); // Chama o service para criar o usuário
  }

  // Rota para obter todos os usuários
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll(); // Chama o service para retornar todos os usuários
  }

  // Rota para obter um usuário por ID
  @Get(':id')
  findOne(@Param('id') id: number): Promise<User | null> {
    return this.userService.findOne(id); // Chama o service para retornar um usuário específico
  }
}
