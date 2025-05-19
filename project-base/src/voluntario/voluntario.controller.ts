import { Controller, Get, Post, Body, Param, Put, Delete } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { VoluntarioService } from "./voluntario.service";
import { CreateVoluntarioDto } from "./dto/create-voluntario-dto";
import { UpdateVoluntarioDto } from "./dto/update-voluntario-dto";

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
}
