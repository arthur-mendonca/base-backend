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
  Req,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from "@nestjs/swagger";
import { ResponsavelService } from "./responsavel.service";
import { CreateResponsavelDto } from "./dto/create-responsavel.dto";
import { UpdateResponsavelDto } from "./dto/update-responsavel.dto";

import { JwtAuthGuard } from "../auth/dto/jwt-auth.guard";
import { ResponsavelEntity } from "./entity/responsaval.entity";

@ApiTags("Responsáveis")
@Controller("responsavel")
export class ResponsavelController {
  constructor(private readonly responsavelService: ResponsavelService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: "Cadastrar novo responsável" })
  @ApiResponse({
    status: 201,
    description: "Responsável cadastrado com sucesso",
    type: ResponsavelEntity,
  })
  @ApiResponse({ status: 400, description: "Dados inválidos" })
  @ApiResponse({ status: 409, description: "CPF já cadastrado" })
  async create(@Body() createResponsavelDto: CreateResponsavelDto) {
    return this.responsavelService.create(createResponsavelDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: "Listar todos os responsáveis" })
  @ApiQuery({ name: "nome", required: false, description: "Filtrar por nome" })
  @ApiQuery({ name: "cpf", required: false, description: "Filtrar por CPF" })
  @ApiQuery({ name: "ocupacao", required: false, description: "Filtrar por ocupação" })
  @ApiQuery({ name: "comFamilia", required: false, description: "Filtrar responsáveis com família cadastrada" })
  @ApiQuery({ name: "semFamilia", required: false, description: "Filtrar responsáveis sem família cadastrada" })
  @ApiQuery({ name: "comCestas", required: false, description: "Filtrar responsáveis que receberam cestas básicas" })
  @ApiResponse({
    status: 200,
    description: "Lista de responsáveis",
    type: [ResponsavelEntity],
  })
  async findAll(
    @Query("nome") nome?: string,
    @Query("cpf") cpf?: string,
    @Query("ocupacao") ocupacao?: string,
    @Query("comFamilia") comFamilia?: string,
    @Query("semFamilia") semFamilia?: string,
    @Query("comCestas") comCestas?: string,
  ) {
    if (cpf) {
      const responsavel = await this.responsavelService.findByCpf(cpf);
      return responsavel ? [responsavel] : [];
    }

    if (nome) {
      return this.responsavelService.findByNome(nome);
    }

    if (ocupacao) {
      return this.responsavelService.findByOcupacao(ocupacao);
    }

    if (comFamilia === "true") {
      return this.responsavelService.findComFamilia();
    }

    if (semFamilia === "true") {
      return this.responsavelService.findSemFamilia();
    }

    if (comCestas === "true") {
      return this.responsavelService.findComCestas();
    }

    return this.responsavelService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get("perfil")
  @ApiOperation({ summary: "Visualizar responsáveis conforme perfil do usuário" })
  @ApiResponse({
    status: 200,
    description: "Lista de responsáveis filtrada pelo perfil do usuário",
    type: [ResponsavelEntity],
  })
  async findByProfile(@Req() req: any) {
    const perfil = req.user.perfil;
    return this.responsavelService.findByProfile(perfil);
  }

  @UseGuards(JwtAuthGuard)
  @Get("relatorio")
  @ApiOperation({ summary: "Gerar relatórios de responsáveis" })
  @ApiQuery({ name: "nome", required: false, description: "Filtrar por nome" })
  @ApiQuery({ name: "cpf", required: false, description: "Filtrar por CPF" })
  @ApiQuery({ name: "ocupacao", required: false, description: "Filtrar por ocupação" })
  @ApiQuery({ name: "comFamilia", required: false, description: "Filtrar responsáveis com família cadastrada" })
  @ApiQuery({ name: "semFamilia", required: false, description: "Filtrar responsáveis sem família cadastrada" })
  @ApiQuery({ name: "comCestas", required: false, description: "Filtrar responsáveis que receberam cestas básicas" })
  @ApiResponse({
    status: 200,
    description: "Relatório de responsáveis gerado com sucesso",
    type: [ResponsavelEntity],
  })
  async generateReport(
    @Query("nome") nome?: string,
    @Query("cpf") cpf?: string,
    @Query("ocupacao") ocupacao?: string,
    @Query("comFamilia") comFamilia?: string,
    @Query("semFamilia") semFamilia?: string,
    @Query("comCestas") comCestas?: string,
  ) {
    const filter = {
      nome,
      cpf,
      ocupacao,
      comFamilia,
      semFamilia,
      comCestas,
    };
    return this.responsavelService.generateReport(filter);
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  @ApiOperation({ summary: "Buscar responsável por ID" })
  @ApiParam({ name: "id", description: "ID do responsável" })
  @ApiResponse({
    status: 200,
    description: "Responsável encontrado",
    type: ResponsavelEntity,
  })
  @ApiResponse({ status: 404, description: "Responsável não encontrado" })
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.responsavelService.findOne(BigInt(id));
  }

  @UseGuards(JwtAuthGuard)
  @Put(":id")
  @ApiOperation({ summary: "Atualizar responsável" })
  @ApiParam({ name: "id", description: "ID do responsável" })
  @ApiResponse({
    status: 200,
    description: "Responsável atualizado com sucesso",
    type: ResponsavelEntity,
  })
  @ApiResponse({ status: 404, description: "Responsável não encontrado" })
  @ApiResponse({ status: 400, description: "Dados inválidos" })
  @ApiResponse({ status: 409, description: "CPF já cadastrado para outro responsável" })
  async update(@Param("id", ParseIntPipe) id: number, @Body() updateResponsavelDto: UpdateResponsavelDto) {
    return this.responsavelService.update(BigInt(id), updateResponsavelDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: "Remover responsável" })
  @ApiParam({ name: "id", description: "ID do responsável" })
  @ApiResponse({ status: 204, description: "Responsável removido com sucesso" })
  @ApiResponse({ status: 404, description: "Responsável não encontrado" })
  async remove(@Param("id", ParseIntPipe) id: number) {
    await this.responsavelService.remove(BigInt(id));
  }
}
