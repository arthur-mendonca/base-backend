import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
  Query,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from "@nestjs/swagger";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserEntity } from "./entity/user.entity";
import { JwtAuthGuard } from "../auth/dto/jwt-auth.guard";

@ApiTags("Usuários")
@Controller("usuario")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: "Criar novo usuário" })
  @ApiResponse({
    status: 201,
    description: "Usuário criado com sucesso",
    type: UserEntity,
  })
  @ApiResponse({ status: 400, description: "Dados inválidos" })
  @ApiResponse({ status: 409, description: "E-mail já cadastrado" })
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: "Listar todos os usuários" })
  @ApiQuery({ name: "perfil", required: false, description: "Filtrar por perfil (admin/usuario)" })
  @ApiQuery({ name: "nome", required: false, description: "Filtrar por nome" })
  @ApiQuery({ name: "dias", required: false, description: "Listar usuários criados nos últimos X dias" })
  @ApiResponse({
    status: 200,
    description: "Lista de usuários",
    type: [UserEntity],
  })
  async findAll(@Query("perfil") perfil?: string, @Query("nome") nome?: string, @Query("dias") dias?: string) {
    if (perfil) {
      return this.userService.findByPerfil(perfil);
    }

    if (nome) {
      return this.userService.findByNome(nome);
    }

    if (dias) {
      return this.userService.findRecentlyCreated(Number(dias));
    }

    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get("relatorio")
  @ApiOperation({ summary: "Gerar relatórios de usuários" })
  @ApiQuery({ name: "perfil", required: false, description: "Filtrar por perfil" })
  @ApiQuery({ name: "dataCriacaoInicio", required: false, description: "Data de início para filtro" })
  @ApiQuery({ name: "dataCriacaoFim", required: false, description: "Data de fim para filtro" })
  @ApiQuery({ name: "nome", required: false, description: "Filtrar por nome" })
  @ApiResponse({
    status: 200,
    description: "Relatório de usuários gerado com sucesso",
    type: [UserEntity],
  })
  async generateReport(
    @Query("perfil") perfil?: string,
    @Query("dataCriacaoInicio") dataCriacaoInicio?: string,
    @Query("dataCriacaoFim") dataCriacaoFim?: string,
    @Query("nome") nome?: string,
  ) {
    const filter = {
      perfil,
      dataCriacaoInicio,
      dataCriacaoFim,
      nome,
    };
    return this.userService.generateReport(filter);
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  @ApiOperation({ summary: "Obter um usuário pelo ID" })
  @ApiParam({ name: "id", description: "ID do usuário" })
  @ApiResponse({
    status: 200,
    description: "Usuário encontrado",
    type: UserEntity,
  })
  @ApiResponse({ status: 404, description: "Usuário não encontrado" })
  async findOne(@Param("id") id: string) {
    return this.userService.findOne(BigInt(id));
  }

  @UseGuards(JwtAuthGuard)
  @Put(":id")
  @ApiOperation({ summary: "Atualizar um usuário" })
  @ApiParam({ name: "id", description: "ID do usuário" })
  @ApiResponse({
    status: 200,
    description: "Usuário atualizado com sucesso",
    type: UserEntity,
  })
  @ApiResponse({ status: 404, description: "Usuário não encontrado" })
  @ApiResponse({ status: 400, description: "Dados inválidos" })
  async update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(BigInt(id), updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: "Remover um usuário" })
  @ApiParam({ name: "id", description: "ID do usuário" })
  @ApiResponse({ status: 204, description: "Usuário removido com sucesso" })
  @ApiResponse({ status: 404, description: "Usuário não encontrado" })
  async remove(@Param("id") id: string) {
    await this.userService.remove(BigInt(id));
  }
}
