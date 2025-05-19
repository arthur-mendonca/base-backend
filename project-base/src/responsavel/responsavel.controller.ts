import { Controller, Get, Post, Body, Param, Put, Delete } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ResponsavelService } from "./responsavel.service";
import { CreateResponsavelDto } from "./dto/create-responsavel-dto";
import { UpdateResponsavelDto } from "./dto/update-responsavel-dto";

@ApiTags("responsaveis")
@Controller("responsavel")
export class ResponsavelController {
  constructor(private readonly responsavelService: ResponsavelService) {}

  @Post()
  @ApiOperation({ summary: "Cadastrar novo responsável" })
  @ApiResponse({ status: 201, description: "Responsável cadastrado com sucesso" })
  async create(@Body() createResponsavelDto: CreateResponsavelDto) {
    return this.responsavelService.create(createResponsavelDto);
  }

  @Get()
  @ApiOperation({ summary: "Listar todos os responsáveis" })
  async findAll() {
    return this.responsavelService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Obter um responsável pelo ID" })
  async findOne(@Param("id") id: number) {
    return this.responsavelService.findOne(id);
  }

  @Put(":id")
  @ApiOperation({ summary: "Atualizar um responsável" })
  async update(@Param("id") id: number, @Body() updateResponsavelDto: UpdateResponsavelDto) {
    return this.responsavelService.update(id, updateResponsavelDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Remover um responsável" })
  async remove(@Param("id") id: number) {
    return this.responsavelService.remove(id);
  }
}
