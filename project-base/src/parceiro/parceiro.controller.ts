import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ParceiroService } from "./parceiro.service";
import { CreateParceiroDto } from "./dto/create-parceiro.dto";
import { UpdateParceiroDto } from "./dto/update-parceiro.dto";

@ApiTags("parceiros")
@Controller("parceiro")
export class ParceiroController {
  constructor(private readonly parceiroService: ParceiroService) {}

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
}
