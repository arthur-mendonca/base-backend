import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Query, Req } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ResponsavelService } from "./responsavel.service";
import { CreateResponsavelDto } from "./dto/create-responsavel.dto";
import { UpdateResponsavelDto } from "./dto/update-responsavel.dto";
import { JwtAuthGuard } from "src/auth/dto/jwt-auth.guard";
import { Request as ExpressRequest } from "express";
@ApiTags("responsaveis")
@Controller("responsavel")
export class ResponsavelController {
  constructor(private readonly responsavelService: ResponsavelService) { }

  @Post()
  @ApiOperation({ summary: "Cadastrar novo responsável" })
  @ApiResponse({ status: 201, description: "Responsável cadastrado com sucesso" })
  async create(@Body() createResponsavelDto: CreateResponsavelDto) {
    return this.responsavelService.create(createResponsavelDto);
  }

  @Get()
  @ApiOperation({ summary: "Listar todos os responsáveis" })
  async findAll() {
    return this.responsavelService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Obter um responsável pelo ID" })
  async findOne(@Param("id") id: number) {
    return this.responsavelService.findOne(id);
  }

  @Put(":id")
  @ApiOperation({ summary: "Atualizar um responsável" })
  async update(@Param("id") id: number, @Body() updateResponsavelDto: UpdateResponsavelDto) {
    return this.responsavelService.update(id, updateResponsavelDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Remover um responsável" })
  async remove(@Param("id") id: number) {
    return this.responsavelService.remove(id);
  }
  @UseGuards(JwtAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Get("perfil")
  @ApiOperation({ summary: "Visualizar dados conforme perfil do usuário" })
  async findByProfile(@Req() req: any) {
    const perfil = req.user.perfil; // Supondo que o perfil do usuário esteja no token JWT
    return this.responsavelService.findByProfile(perfil);
  }
  @UseGuards(JwtAuthGuard)
  @Get("relatorio")
  @ApiOperation({ summary: "Gerar relatórios de responsáveis" })
  async generateReport(@Query() filter: any) {
    return this.responsavelService.generateReport(filter);
  }
}
