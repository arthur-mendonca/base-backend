import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  Req,
  HttpStatus,
  HttpCode,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from "@nestjs/swagger";
import { PessoaService } from "./pessoa.service";
import { CreatePessoaDto } from "./dto/create-pessoa.dto";
import { UpdatePessoaDto } from "./dto/update-pessoa.dto";
import { PessoaEntity } from "./entity/pessoa.entity";
import { JwtAuthGuard } from "../auth/dto/jwt-auth.guard";

@ApiTags("Pessoas")
@Controller("pessoa")
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: "Criar um novo registro de pessoa" })
  @ApiResponse({
    status: 201,
    description: "Pessoa criada com sucesso",
    type: PessoaEntity,
  })
  @ApiResponse({ status: 400, description: "Dados inválidos" })
  async create(@Body() createPessoaDto: CreatePessoaDto) {
    return this.pessoaService.create(createPessoaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: "Listar todas as pessoas cadastradas" })
  @ApiQuery({ name: "familia", required: false, description: "Filtrar por ID da família" })
  @ApiQuery({ name: "responsavel", required: false, description: "Filtrar por ID do responsável" })
  @ApiQuery({ name: "nome", required: false, description: "Filtrar por nome" })
  @ApiQuery({ name: "documento", required: false, description: "Filtrar por CPF ou RG" })
  @ApiQuery({ name: "idadeMin", required: false, description: "Idade mínima" })
  @ApiQuery({ name: "idadeMax", required: false, description: "Idade máxima" })
  @ApiResponse({
    status: 200,
    description: "Lista de pessoas",
    type: [PessoaEntity],
  })
  async findAll(
    @Query("familia") idFamilia?: string,
    @Query("responsavel") idResponsavel?: string,
    @Query("nome") nome?: string,
    @Query("documento") documento?: string,
    @Query("idadeMin") idadeMin?: string,
    @Query("idadeMax") idadeMax?: string,
  ) {
    if (idFamilia) {
      return this.pessoaService.findByFamilia(BigInt(idFamilia));
    }

    if (idResponsavel) {
      return this.pessoaService.findByResponsavel(BigInt(idResponsavel));
    }

    if (nome) {
      return this.pessoaService.findByNome(nome);
    }

    if (documento) {
      return this.pessoaService.findByDocumento(documento);
    }

    if (idadeMin && idadeMax) {
      return this.pessoaService.findByIdade(Number(idadeMin), Number(idadeMax));
    }

    return this.pessoaService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get("perfil")
  @ApiOperation({ summary: "Visualizar pessoas conforme perfil do usuário" })
  @ApiResponse({
    status: 200,
    description: "Lista de pessoas filtrada pelo perfil do usuário",
    type: [PessoaEntity],
  })
  async findByProfile(@Req() req: any) {
    const perfil = req.user.perfil;
    const userId = BigInt(req.user.id_usuario);
    return this.pessoaService.findByProfile(perfil, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get("relatorio")
  @ApiOperation({ summary: "Gerar relatórios de pessoas" })
  @ApiQuery({ name: "dataInicio", required: false, description: "Data de início para filtro" })
  @ApiQuery({ name: "dataFim", required: false, description: "Data de fim para filtro" })
  @ApiQuery({ name: "idFamilia", required: false, description: "ID da família para filtro" })
  @ApiQuery({ name: "idadeMin", required: false, description: "Idade mínima para filtro" })
  @ApiQuery({ name: "idadeMax", required: false, description: "Idade máxima para filtro" })
  @ApiResponse({
    status: 200,
    description: "Relatório de pessoas gerado com sucesso",
    type: [PessoaEntity],
  })
  async generateReport(
    @Query("dataInicio") dataInicio?: string,
    @Query("dataFim") dataFim?: string,
    @Query("idFamilia") idFamilia?: string,
    @Query("idadeMin") idadeMin?: string,
    @Query("idadeMax") idadeMax?: string,
  ) {
    const filter = {
      dataInicio,
      dataFim,
      idFamilia,
      idadeMin,
      idadeMax,
    };
    return this.pessoaService.generateReport(filter);
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  @ApiOperation({ summary: "Obter uma pessoa pelo ID" })
  @ApiParam({ name: "id", description: "ID da pessoa" })
  @ApiResponse({
    status: 200,
    description: "Pessoa encontrada",
    type: PessoaEntity,
  })
  @ApiResponse({ status: 404, description: "Pessoa não encontrada" })
  async findOne(@Param("id") id: string) {
    return this.pessoaService.findOne(BigInt(id));
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  @ApiOperation({ summary: "Atualizar dados de uma pessoa" })
  @ApiParam({ name: "id", description: "ID da pessoa" })
  @ApiResponse({
    status: 200,
    description: "Pessoa atualizada com sucesso",
    type: PessoaEntity,
  })
  @ApiResponse({ status: 404, description: "Pessoa não encontrada" })
  @ApiResponse({ status: 400, description: "Dados inválidos" })
  async update(@Param("id") id: string, @Body() updatePessoaDto: UpdatePessoaDto) {
    return this.pessoaService.update(BigInt(id), updatePessoaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: "Remover uma pessoa do cadastro" })
  @ApiParam({ name: "id", description: "ID da pessoa" })
  @ApiResponse({ status: 204, description: "Pessoa removida com sucesso" })
  @ApiResponse({ status: 404, description: "Pessoa não encontrada" })
  async remove(@Param("id") id: string) {
    await this.pessoaService.remove(BigInt(id));
  }
}