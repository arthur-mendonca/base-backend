import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { FrequenciaService } from "./frequencia.service";
import { CreateFrequenciaDto } from "./dto/create-frequencia-dto";
import { UpdateFrequenciaDto } from "./dto/update-frequencia-dto";
import { JwtAuthGuard } from "../autenticacao/jwt-auth.guard";

@ApiTags("frequencias")
@Controller("frequencia")
export class FrequenciaController {
  constructor(private readonly frequenciaService: FrequenciaService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: "Registrar nova frequência" })
  @ApiResponse({ status: 201, description: "Frequência registrada com sucesso" })
  async create(@Body() createFrequenciaDto: CreateFrequenciaDto) {
    return this.frequenciaService.create(createFrequenciaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: "Listar todas as frequências" })
  async findAll() {
    return this.frequenciaService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  @ApiOperation({ summary: "Obter uma frequência pelo ID" })
  async findOne(@Param("id") id: number) {
    return this.frequenciaService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get("crianca/:id")
  @ApiOperation({ summary: "Listar todas as frequências de uma criança" })
  async findByChildId(@Param("id") id: number) {
    return this.frequenciaService.findByChildId(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(":id")
  @ApiOperation({ summary: "Atualizar uma frequência" })
  async update(@Param("id") id: number, @Body() updateFrequenciaDto: UpdateFrequenciaDto) {
    return this.frequenciaService.update(id, updateFrequenciaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  @ApiOperation({ summary: "Remover uma frequência" })
  async remove(@Param("id") id: number) {
    return this.frequenciaService.remove(id);
  }
}
