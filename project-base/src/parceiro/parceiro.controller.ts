import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Query,Request, Req } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ParceiroService } from "./parceiro.service";
import { CreateParceiroDto } from "./dto/create-parceiro.dto";
import { UpdateParceiroDto } from "./dto/update-parceiro.dto";
import { JwtAuthGuard } from "src/auth/dto/jwt-auth.guard";

@ApiTags("parceiros")
@Controller("parceiro")
export class ParceiroController {
  constructor(private readonly parceiroService: ParceiroService) { }

  @Post()
  @ApiOperation({ summary: "Cadastrar novo parceiro" })
  @ApiResponse({ status: 201, description: "Parceiro cadastrado com sucesso" })
  async create(@Body() createParceiroDto: CreateParceiroDto) {
    return this.parceiroService.create(createParceiroDto);
  }

  @Get()
  @ApiOperation({ summary: "Listar todos os parceiros" })
  async findAll() {
    return this.parceiroService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Obter um parceiro pelo ID" })
  async findOne(@Param("id") id: number) {
    return this.parceiroService.findOne(id);
  }

  @Put(":id")
  @ApiOperation({ summary: "Atualizar um parceiro" })
  async update(@Param("id") id: number, @Body() updateParceiroDto: UpdateParceiroDto) {
    return this.parceiroService.update(id, updateParceiroDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Remover um parceiro" })
  async remove(@Param("id") id: number) {
    return this.parceiroService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get("perfil")
  @ApiOperation({ summary: "Visualizar dados conforme perfil do usuário" })
  async findByProfile(@Req() req: any) {
    const perfil = req.user.perfil; // Supondo que o perfil do usuário esteja no token JWT
    return this.parceiroService.findByProfile(perfil);
  }

  // Nova rota para gerar relatórios
  @UseGuards(JwtAuthGuard)
  @Get("relatorio")
  @ApiOperation({ summary: "Gerar relatórios de parceiros" })
  async generateReport(@Query() filter: any) {
    return this.parceiroService.generateReport(filter);
  }
}
