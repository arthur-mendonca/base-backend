import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Query, Req } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { VoluntarioService } from "./voluntario.service";
import { CreateVoluntarioDto } from "./dto/create-voluntario.dto";
import { UpdateVoluntarioDto } from "./dto/update-voluntario.dto";
import { JwtAuthGuard } from "src/auth/dto/jwt-auth.guard";

@ApiTags("voluntarios")
@Controller("voluntario")
export class VoluntarioController {
  constructor(private readonly voluntarioService: VoluntarioService) {}

  @Post()
  @ApiOperation({ summary: "Cadastrar novo voluntário" })
  @ApiResponse({ status: 201, description: "Voluntário cadastrado com sucesso" })
  async create(@Body() createVoluntarioDto: CreateVoluntarioDto) {
    return this.voluntarioService.create(createVoluntarioDto);
  }

  @Get()
  @ApiOperation({ summary: "Listar todos os voluntários" })
  async findAll() {
    return this.voluntarioService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Obter um voluntário pelo ID" })
  async findOne(@Param("id") id: number) {
    return this.voluntarioService.findOne(id);
  }

  @Put(":id")
  @ApiOperation({ summary: "Atualizar um voluntário" })
  async update(@Param("id") id: number, @Body() updateVoluntarioDto: UpdateVoluntarioDto) {
    return this.voluntarioService.update(id, updateVoluntarioDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Remover um voluntário" })
  async remove(@Param("id") id: number) {
    return this.voluntarioService.remove(id);
  }
  
 @UseGuards(JwtAuthGuard)
  @Get("perfil")
  @ApiOperation({ summary: "Visualizar dados conforme perfil do usuário" })
  async findByProfile(@Req() req) {
    const perfil = req.user.perfil; // Supondo que o perfil do usuário esteja no token JWT
    const userId = req.user.userId; // Supondo que o userId do usuário esteja no token JWT
    return this.voluntarioService.findByProfile(perfil, userId);
  }
  @UseGuards(JwtAuthGuard)
  @Get("relatorio")
  @ApiOperation({ summary: "Gerar relatórios de voluntários" })
  async generateReport(@Query() filter: any) {
    return this.voluntarioService.generateReport(filter);
  }
}
