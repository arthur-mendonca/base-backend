import { Controller, Get, Post, Body, Param, Put, Delete } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import * as bcrypt from "bcrypt";
@ApiTags("usuarios")
@Controller("usuario")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: "Criar novo usuário" })
  @ApiResponse({ status: 201, description: "Usuário criado com sucesso" })
  async create(@Body() createUserDto: CreateUserDto) {
    const saltOrRounds = 10; //Criptografia senha
    const hashedPassword = await bcrypt.hash(createUserDto.senha, saltOrRounds);

    const userToSave = { ...createUserDto, senha: hashedPassword };
    return this.userService.create(userToSave);
  }

  @Get()
  @ApiOperation({ summary: "Listar todos os usuários" })
  async findAll() {
    return this.userService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Obter um usuário pelo ID" })
  async findOne(@Param("id") id: number) {
    return this.userService.findOne(id);
  }

  @Put(":id")
  @ApiOperation({ summary: "Atualizar um usuário" })
  async update(@Param("id") id: number, @Body() updateUserDto: UpdateUserDto) {
    let userToUpdate = updateUserDto;
    if (updateUserDto.senha) {
      const saltOrRounds = 10;
      const hashedPassword = await bcrypt.hash(updateUserDto.senha, saltOrRounds);
      userToUpdate = { ...updateUserDto, senha: hashedPassword };
    }
    return this.userService.update(id, userToUpdate);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Remover um usuário" })
  async remove(@Param("id") id: number) {
    return this.userService.remove(id);
  }
}
