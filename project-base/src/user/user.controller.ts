import { Controller, Get, Post, Body, Param, Put, Delete } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user-dto";
import { UpdateUserDto } from "./dto/update-user-dto";

@ApiTags("usuarios")
@Controller("usuario")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: "Criar novo usuário" })
  @ApiResponse({ status: 201, description: "Usuário criado com sucesso" })
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
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
    return this.userService.update(id, updateUserDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Remover um usuário" })
  async remove(@Param("id") id: number) {
    return this.userService.remove(id);
  }
}
