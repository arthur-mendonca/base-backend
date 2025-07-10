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
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from "@nestjs/swagger";
import { VoluntarioService } from "./voluntario.service";
import { CreateVoluntarioDto } from "./dto/create-voluntario.dto";
import { UpdateVoluntarioDto } from "./dto/update-voluntario.dto";
import { VoluntarioEntity } from "./entity/voluntario.entity";
import { JwtAuthGuard } from "../auth/dto/jwt-auth.guard";

@ApiTags("Voluntários")
@Controller("voluntario")
export class VoluntarioController {
  constructor(private readonly voluntarioService: VoluntarioService) {}

  @Post()
  @ApiOperation({ summary: "Cadastrar novo voluntário" })
  @ApiResponse({
    status: 201,
    description: "Voluntário cadastrado com sucesso",
    type: VoluntarioEntity,
  })
  @ApiResponse({ status: 400, description: "Dados inválidos" })
  @ApiResponse({ status: 409, description: "CPF já cadastrado" })
  async create(@Body() createVoluntarioDto: CreateVoluntarioDto) {
    return this.voluntarioService.create(createVoluntarioDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: "Listar todos os voluntários" })
  @ApiQuery({ name: "nome", required: false, description: "Filtrar por nome" })
  @ApiQuery({ name: "area", required: false, description: "Filtrar por área de atuação" })
  @ApiQuery({ name: "disponibilidade", required: false, description: "Filtrar por disponibilidade" })
  @ApiQuery({ name: "status", required: false, description: "Filtrar por status (aceitou termos)" })
  @ApiQuery({ name: "dias", required: false, description: "Listar voluntários cadastrados nos últimos X dias" })
  @ApiResponse({
    status: 200,
    description: "Lista de voluntários",
    type: [VoluntarioEntity],
  })
  async findAll(
    @Query("nome") nome?: string,
    @Query("area") area?: string,
    @Query("disponibilidade") disponibilidade?: string,
    @Query("status") status?: string,
    @Query("dias") dias?: string,
  ) {
    if (nome) {
      return this.voluntarioService.findByNome(nome);
    }

    if (area) {
      return this.voluntarioService.findByAreaAtuacao(area);
    }

    if (disponibilidade) {
      return this.voluntarioService.findByDisponibilidade(disponibilidade);
    }

    if (status !== undefined) {
      return this.voluntarioService.findByStatus(status === "true");
    }

    if (dias) {
      return this.voluntarioService.findRecentlyCadastrados(Number(dias));
    }

    return this.voluntarioService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get("perfil")
  @ApiOperation({ summary: "Visualizar voluntários conforme perfil do usuário" })
  @ApiResponse({
    status: 200,
    description: "Lista de voluntários filtrada pelo perfil do usuário",
    type: [VoluntarioEntity],
  })
  async findByProfile(@Req() req: any) {
    const perfil = req.user.perfil;
    return this.voluntarioService.findByProfile(perfil);
  }

  @UseGuards(JwtAuthGuard)
  @Get("relatorio")
  @ApiOperation({ summary: "Gerar relatórios de voluntários" })
  @ApiQuery({ name: "area_atuacao", required: false, description: "Filtrar por área de atuação" })
  @ApiQuery({ name: "disponibilidade", required: false, description: "Filtrar por disponibilidade" })
  @ApiQuery({ name: "dataCadastroInicio", required: false, description: "Data de início para filtro" })
  @ApiQuery({ name: "dataCadastroFim", required: false, description: "Data de fim para filtro" })
  @ApiQuery({ name: "nome", required: false, description: "Filtrar por nome" })
  @ApiQuery({ name: "status", required: false, description: "Filtrar por status (aceitou termos)" })
  @ApiResponse({
    status: 200,
    description: "Relatório de voluntários gerado com sucesso",
    type: [VoluntarioEntity],
  })
  async generateReport(
    @Query("area_atuacao") area_atuacao?: string,
    @Query("disponibilidade") disponibilidade?: string,
    @Query("dataCadastroInicio") dataCadastroInicio?: string,
    @Query("dataCadastroFim") dataCadastroFim?: string,
    @Query("nome") nome?: string,
    @Query("status") status?: string,
  ) {
    const filter = {
      area_atuacao,
      disponibilidade,
      dataCadastroInicio,
      dataCadastroFim,
      nome,
      status: status !== undefined ? status === "true" : undefined,
    };
    return this.voluntarioService.generateReport(filter);
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  @ApiOperation({ summary: "Obter um voluntário pelo ID" })
  @ApiParam({ name: "id", description: "ID do voluntário" })
  @ApiResponse({
    status: 200,
    description: "Voluntário encontrado",
    type: VoluntarioEntity,
  })
  @ApiResponse({ status: 404, description: "Voluntário não encontrado" })
  async findOne(@Param("id") id: string) {
    return this.voluntarioService.findOne(BigInt(id));
  }

  @UseGuards(JwtAuthGuard)
  @Put(":id")
  @ApiOperation({ summary: "Atualizar um voluntário" })
  @ApiParam({ name: "id", description: "ID do voluntário" })
  @ApiResponse({
    status: 200,
    description: "Voluntário atualizado com sucesso",
    type: VoluntarioEntity,
  })
  @ApiResponse({ status: 404, description: "Voluntário não encontrado" })
  @ApiResponse({ status: 400, description: "Dados inválidos" })
  async update(@Param("id") id: string, @Body() updateVoluntarioDto: UpdateVoluntarioDto) {
    return this.voluntarioService.update(BigInt(id), updateVoluntarioDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: "Remover um voluntário" })
  @ApiParam({ name: "id", description: "ID do voluntário" })
  @ApiResponse({ status: 204, description: "Voluntário removido com sucesso" })
  @ApiResponse({ status: 404, description: "Voluntário não encontrado" })
  async remove(@Param("id") id: string) {
    await this.voluntarioService.remove(BigInt(id));
  }
}
