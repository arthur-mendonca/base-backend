import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { CriancaService } from "./crianca.service";

import { JwtAuthGuard } from "../autenticacao/jwt-auth.guard";
import { CreateCriancaDto } from "./dto/create-crianca-dto";
import { UpdateCriancaDto } from "./dto/update-crianca-dto";

@ApiTags("criancas")
@Controller("crianca")
export class CriancaController {
  constructor(private readonly criancaService: CriancaService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: "Criar um novo registro de criança" })
  @ApiResponse({ status: 201, description: "Criança criada com sucesso" })
  async create(@Body() createCriancaDto: CreateCriancaDto) {
    return this.criancaService.create(createCriancaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: "Listar todas as crianças cadastradas" })
  async findAll() {
    return this.criancaService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  @ApiOperation({ summary: "Obter uma criança pelo ID" })
  async findOne(@Param("id") id: number) {
    return this.criancaService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(":id")
  @ApiOperation({ summary: "Atualizar dados de uma criança" })
  async update(@Param("id") id: number, @Body() updateCriancaDto: UpdateCriancaDto) {
    return this.criancaService.update(id, updateCriancaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  @ApiOperation({ summary: "Remover uma criança do cadastro" })
  async remove(@Param("id") id: number) {
    return this.criancaService.remove(id);
  }
}
