import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from "@nestjs/swagger";
import { AtividadeService } from "./atividade.service";
import { CreateAtividadeDto } from "./dto/create-atividade.dto";
import { UpdateAtividadeDto } from "./dto/update-atividade.dto";
import { AtividadeEntity } from "./entity/atividade.entity";

@ApiTags("Atividade")
@Controller("atividade")
export class AtividadeController {
  constructor(private readonly atividadeService: AtividadeService) {}

  @Post()
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
  @ApiOperation({ summary: "Listar todas as atividades" })
  @ApiQuery({ name: "tipo", required: false, description: "Filtrar por tipo de atividade" })
  @ApiQuery({ name: "publicoAlvo", required: false, description: "Filtrar por público-alvo" })
  @ApiQuery({ name: "diaSemana", required: false, description: "Filtrar por dia da semana" })
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
  @ApiOperation({ summary: "Buscar atividade por ID" })
  @ApiParam({ name: "id", description: "ID da atividade" })
  @ApiResponse({
    status: 200,
    description: "Atividade encontrada",
    type: AtividadeEntity,
  })
  @ApiResponse({ status: 404, description: "Atividade não encontrada" })
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.atividadeService.findOne(BigInt(id));
  }

  @Patch(":id")
  @ApiOperation({ summary: "Atualizar atividade" })
  @ApiParam({ name: "id", description: "ID da atividade" })
  @ApiResponse({
    status: 200,
    description: "Atividade atualizada com sucesso",
    type: AtividadeEntity,
  })
  @ApiResponse({ status: 404, description: "Atividade não encontrada" })
  @ApiResponse({ status: 400, description: "Dados inválidos" })
  async update(@Param("id", ParseIntPipe) id: number, @Body() updateAtividadeDto: UpdateAtividadeDto) {
    return this.atividadeService.update(BigInt(id), updateAtividadeDto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: "Remover atividade" })
  @ApiParam({ name: "id", description: "ID da atividade" })
  @ApiResponse({ status: 204, description: "Atividade removida com sucesso" })
  @ApiResponse({ status: 404, description: "Atividade não encontrada" })
  async remove(@Param("id", ParseIntPipe) id: number) {
    await this.atividadeService.remove(BigInt(id));
  }
}
