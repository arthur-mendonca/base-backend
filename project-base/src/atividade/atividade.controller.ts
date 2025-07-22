import {
  Controller,
  Get,
  Post,
  Body,
  Patch, // Usar Patch para atualizações parciais é uma boa prática
  Param,
  Delete,
  Query,
  HttpCode,
  HttpStatus,
  UseGuards,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from "@nestjs/swagger";
import { AtividadeService } from "./atividade.service";
import { CreateAtividadeDto } from "./dto/create-atividade.dto";
import { UpdateAtividadeDto } from "./dto/update-atividade.dto";
import { AtividadeEntity } from "./entity/atividade.entity";
import { JwtAuthGuard } from "../auth/dto/jwt-auth.guard";

@ApiTags("Atividades") // Tag para agrupar no Swagger
@Controller("atividade")
export class AtividadeController {
  constructor(private readonly atividadeService: AtividadeService) {}

  @Post()
  @UseGuards(JwtAuthGuard) // Protegendo a rota
  @ApiOperation({ summary: "Criar uma nova atividade" })
  @ApiResponse({
    status: 201,
    description: "Atividade criada com sucesso",
    type: AtividadeEntity,
  })
  @ApiResponse({ status: 400, description: "Dados inválidos" })
  async create(@Body() createAtividadeDto: CreateAtividadeDto) {
    return this.atividadeService.create(createAtividadeDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Listar todas as atividades" })
  @ApiQuery({ name: "tipo", required: false, description: "Filtrar por tipo de atividade" })
  @ApiQuery({ name: "publicoAlvo", required: false, description: "Filtrar por público-alvo" })
  @ApiQuery({ name: "diaSemana", required: false, description: "Filtrar por dia da semana (1-7)" })
  @ApiResponse({
    status: 200,
    description: "Lista de atividades",
    type: [AtividadeEntity],
  })
  async findAll(
    @Query("tipo") tipo?: string,
    @Query("publicoAlvo") publicoAlvo?: string,
    @Query("diaSemana") diaSemana?: string,
  ) {
    if (tipo) {
      return this.atividadeService.findByTipo(tipo);
    }
    if (publicoAlvo) {
      return this.atividadeService.findByPublicoAlvo(publicoAlvo);
    }
    if (diaSemana) {
      return this.atividadeService.findByDiaSemana(diaSemana);
    }
    return this.atividadeService.findAll();
  }

  @Get(":id")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Buscar atividade por ID" })
  @ApiParam({ name: "id", description: "ID da atividade (Snowflake)" })
  @ApiResponse({
    status: 200,
    description: "Atividade encontrada",
    type: AtividadeEntity,
  })
  @ApiResponse({ status: 404, description: "Atividade não encontrada" })
  async findOne(@Param("id") id: string) {
    return this.atividadeService.findOne(BigInt(id));
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Atualizar uma atividade" })
  @ApiParam({ name: "id", description: "ID da atividade (Snowflake)" })
  @ApiResponse({
    status: 200,
    description: "Atividade atualizada com sucesso",
    type: AtividadeEntity,
  })
  @ApiResponse({ status: 404, description: "Atividade não encontrada" })
  @ApiResponse({ status: 400, description: "Dados inválidos" })
  async update(@Param("id") id: string, @Body() updateAtividadeDto: UpdateAtividadeDto) {
    return this.atividadeService.update(BigInt(id), updateAtividadeDto);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: "Remover uma atividade" })
  @ApiParam({ name: "id", description: "ID da atividade (Snowflake)" })
  @ApiResponse({ status: 204, description: "Atividade removida com sucesso" })
  @ApiResponse({ status: 404, description: "Atividade não encontrada" })
  async remove(@Param("id") id: string) {
    await this.atividadeService.remove(BigInt(id));
  }
}
