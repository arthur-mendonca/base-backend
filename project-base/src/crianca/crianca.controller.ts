import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
  Query,
  Req,
  HttpStatus,
  HttpCode,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from "@nestjs/swagger";
import { CriancaService } from "./crianca.service";
import { CreateCriancaDto } from "./dto/create-crianca.dto";
import { UpdateCriancaDto } from "./dto/update-crianca.dto";

import { CriancaEntity } from "./entity/crianca.entity";
import { JwtAuthGuard } from "src/auth/dto/jwt-auth.guard";

@ApiTags("Crianças")
@Controller("crianca")
export class CriancaController {
  constructor(private readonly criancaService: CriancaService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: "Criar um novo registro de criança" })
  @ApiResponse({
    status: 201,
    description: "Criança criada com sucesso",
    type: CriancaEntity,
  })
  @ApiResponse({ status: 400, description: "Dados inválidos" })
  async create(@Body() createCriancaDto: CreateCriancaDto) {
    return this.criancaService.create(createCriancaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: "Listar todas as crianças cadastradas" })
  @ApiQuery({ name: "familia", required: false, description: "Filtrar por ID da família" })
  @ApiQuery({ name: "responsavel", required: false, description: "Filtrar por ID do responsável" })
  @ApiResponse({
    status: 200,
    description: "Lista de crianças",
    type: [CriancaEntity],
  })
  async findAll(@Query("familia") idFamilia?: string, @Query("responsavel") idResponsavel?: string) {
    if (idFamilia) {
      return this.criancaService.findByFamilia(BigInt(idFamilia));
    }

    if (idResponsavel) {
      return this.criancaService.findByResponsavel(BigInt(idResponsavel));
    }

    return this.criancaService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get("perfil")
  @ApiOperation({ summary: "Visualizar crianças conforme perfil do usuário" })
  @ApiResponse({
    status: 200,
    description: "Lista de crianças filtrada pelo perfil do usuário",
    type: [CriancaEntity],
  })
  async findByProfile(@Req() req: any) {
    const perfil = req.user.perfil;
    const userId = BigInt(req.user.id_usuario);
    return this.criancaService.findByProfile(perfil, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get("relatorio")
  @ApiOperation({ summary: "Gerar relatórios de crianças" })
  @ApiQuery({ name: "dataInicio", required: false, description: "Data de início para filtro" })
  @ApiQuery({ name: "dataFim", required: false, description: "Data de fim para filtro" })
  @ApiQuery({ name: "idFamilia", required: false, description: "ID da família para filtro" })
  @ApiResponse({
    status: 200,
    description: "Relatório de crianças gerado com sucesso",
    type: [CriancaEntity],
  })
  async generateReport(
    @Query("dataInicio") dataInicio?: string,
    @Query("dataFim") dataFim?: string,
    @Query("idFamilia") idFamilia?: string,
  ) {
    const filter = {
      dataInicio,
      dataFim,
      idFamilia,
    };
    return this.criancaService.generateReport(filter);
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  @ApiOperation({ summary: "Obter uma criança pelo ID" })
  @ApiParam({ name: "id", description: "ID da criança" })
  @ApiResponse({
    status: 200,
    description: "Criança encontrada",
    type: CriancaEntity,
  })
  @ApiResponse({ status: 404, description: "Criança não encontrada" })
  async findOne(@Param("id") id: string) {
    return this.criancaService.findOne(BigInt(id));
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  @ApiOperation({ summary: "Atualizar dados de uma criança" })
  @ApiParam({ name: "id", description: "ID da criança" })
  @ApiResponse({
    status: 200,
    description: "Criança atualizada com sucesso",
    type: CriancaEntity,
  })
  @ApiResponse({ status: 404, description: "Criança não encontrada" })
  @ApiResponse({ status: 400, description: "Dados inválidos" })
  async update(@Param("id") id: string, @Body() updateCriancaDto: UpdateCriancaDto) {
    return this.criancaService.update(BigInt(id), updateCriancaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: "Remover uma criança do cadastro" })
  @ApiParam({ name: "id", description: "ID da criança" })
  @ApiResponse({ status: 204, description: "Criança removida com sucesso" })
  @ApiResponse({ status: 404, description: "Criança não encontrada" })
  async remove(@Param("id") id: string) {
    await this.criancaService.remove(BigInt(id));
  }
}
