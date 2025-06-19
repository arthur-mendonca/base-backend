import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Query, Request, Req } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { FrequenciaService } from "./frequencia.service";
import { CreateFrequenciaDto } from "./dto/create-frequencia.dto";
import { UpdateFrequenciaDto } from "./dto/update-frequencia.dto";
import { JwtAuthGuard } from "src/auth/dto/jwt-auth.guard";

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
  async findOne(@Param("id") id: bigint) {
    return this.frequenciaService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get("crianca/:id")
  @ApiOperation({ summary: "Listar todas as frequências de uma criança" })
  async findByChildId(@Param("id") id: bigint) {
    return this.frequenciaService.findByChildId(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(":id")
  @ApiOperation({ summary: "Atualizar uma frequência" })
  async update(@Param("id") id: bigint, @Body() updateFrequenciaDto: UpdateFrequenciaDto) {
    return this.frequenciaService.update(id, updateFrequenciaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  @ApiOperation({ summary: "Remover uma frequência" })
  async remove(@Param("id") id: bigint) {
    return this.frequenciaService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get("perfil")
  @ApiOperation({ summary: "Visualizar dados conforme perfil do usuário" })
  async findByProfile(@Req() req: any) {
    const perfil = (req.user as any).perfil; // Supondo que o perfil do usuário esteja no token JWT
    return this.frequenciaService.findByProfile(perfil);
  }
  // Nova rota para gerar relatórios
  @UseGuards(JwtAuthGuard)
  @Get("relatorio")
  @ApiOperation({ summary: "Gerar relatórios de frequência" })
  async generateReport(@Query() filter: any) {
    return this.frequenciaService.generateReport(filter);
  }
}
