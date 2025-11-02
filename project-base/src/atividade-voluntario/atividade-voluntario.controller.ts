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
import { AtividadeVoluntarioService } from "./atividade-voluntario.service";
import { CreateAtividadeVoluntarioDto } from "./dto/create-atividade-voluntario.dto";
import { UpdateAtividadeVoluntarioDto } from "./dto/update-atividade-voluntario.dto";
import { AtividadeVoluntarioEntity } from "./entity/atividade-voluntario.entity";

@ApiTags("Atividade Voluntário")
@Controller("atividade-voluntario")
export class AtividadeVoluntarioController {
  constructor(private readonly atividadeVoluntarioService: AtividadeVoluntarioService) {}

  @Post()
  @ApiOperation({ summary: "Criar uma nova atividade de voluntário" })
  @ApiResponse({
    status: 201,
    description: "Atividade de voluntário criada com sucesso",
    type: AtividadeVoluntarioEntity,
  })
  @ApiResponse({ status: 400, description: "Dados inválidos" })
  async create(@Body() createAtividadeVoluntarioDto: CreateAtividadeVoluntarioDto) {
    return this.atividadeVoluntarioService.create(createAtividadeVoluntarioDto);
  }

  @Get()
  @ApiOperation({ summary: "Listar todas as atividades de voluntários" })
  @ApiQuery({ name: "voluntario", required: false, description: "Filtrar por ID do voluntário" })
  @ApiQuery({ name: "dataInicio", required: false, description: "Data de início do período" })
  @ApiQuery({ name: "dataFim", required: false, description: "Data de fim do período" })
  @ApiResponse({
    status: 200,
    description: "Lista de atividades de voluntários",
    type: [AtividadeVoluntarioEntity],
  })
  async findAll(
    @Query("voluntario") idVoluntario?: string,
    @Query("dataInicio") dataInicio?: string,
    @Query("dataFim") dataFim?: string,
  ) {
    if (idVoluntario) {
      return this.atividadeVoluntarioService.findByVoluntario(BigInt(idVoluntario));
    }

    if (dataInicio && dataFim) {
      return this.atividadeVoluntarioService.findByPeriodo(new Date(dataInicio), new Date(dataFim));
    }

    return this.atividadeVoluntarioService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Buscar atividade de voluntário por ID" })
  @ApiParam({ name: "id", description: "ID da atividade de voluntário" })
  @ApiResponse({
    status: 200,
    description: "Atividade de voluntário encontrada",
    type: AtividadeVoluntarioEntity,
  })
  @ApiResponse({ status: 404, description: "Atividade de voluntário não encontrada" })
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.atividadeVoluntarioService.findOne(BigInt(id));
  }

  @Patch(":id")
  @ApiOperation({ summary: "Atualizar atividade de voluntário" })
  @ApiParam({ name: "id", description: "ID da atividade de voluntário" })
  @ApiResponse({
    status: 200,
    description: "Atividade de voluntário atualizada com sucesso",
    type: AtividadeVoluntarioEntity,
  })
  @ApiResponse({ status: 404, description: "Atividade de voluntário não encontrada" })
  @ApiResponse({ status: 400, description: "Dados inválidos" })
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateAtividadeVoluntarioDto: UpdateAtividadeVoluntarioDto,
  ) {
    return this.atividadeVoluntarioService.update(BigInt(id), updateAtividadeVoluntarioDto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: "Remover atividade de voluntário" })
  @ApiParam({ name: "id", description: "ID da atividade de voluntário" })
  @ApiResponse({ status: 204, description: "Atividade de voluntário removida com sucesso" })
  @ApiResponse({ status: 404, description: "Atividade de voluntário não encontrada" })
  async remove(@Param("id", ParseIntPipe) id: number) {
    await this.atividadeVoluntarioService.remove(BigInt(id));
  }
}
