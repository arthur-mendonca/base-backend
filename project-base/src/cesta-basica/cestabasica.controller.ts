import { Controller, Get, Post, Body, Param, Put, Delete } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CestaBasicaService } from "./cestabasica.service";
import { CreateCestaBasicaDto } from "./dto/create-cestabasica.dto";
import { UpdateCestaBasicaDto } from "./dto/update-cestabasica.dto";

@ApiTags("cesta-basica")
@Controller("cesta-basica")
export class CestaBasicaController {
  constructor(private readonly cestaBasicaService: CestaBasicaService) {}

  @Post()
  @ApiOperation({ summary: "Criar nova cesta básica" })
  @ApiResponse({ status: 201, description: "Cesta básica criada com sucesso" })
  async create(@Body() createCestaBasicaDto: CreateCestaBasicaDto) {
    return this.cestaBasicaService.create(createCestaBasicaDto);
  }

  @Get()
  @ApiOperation({ summary: "Listar todas as cestas básicas" })
  async findAll() {
    return this.cestaBasicaService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Obter uma cesta básica pelo ID" })
  async findOne(@Param("id") id: number) {
    return this.cestaBasicaService.findOne(id);
  }

  @Put(":id")
  @ApiOperation({ summary: "Atualizar uma cesta básica" })
  async update(@Param("id") id: number, @Body() updateCestaBasicaDto: UpdateCestaBasicaDto) {
    return this.cestaBasicaService.update(id, updateCestaBasicaDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Remover uma cesta básica" })
  async remove(@Param("id") id: number) {
    return this.cestaBasicaService.remove(id);
  }
}
