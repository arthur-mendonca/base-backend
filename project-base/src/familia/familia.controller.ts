import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";
import { FamiliaService } from "./familia.service";
import { CreateFamiliaDto } from "./dto/create-familia.dto";
import { UpdateFamiliaDto } from "./dto/update-familia.dto";
import { FamiliaEntity } from "./entity/familia.entity";
import { JwtAuthGuard } from "../auth/dto/jwt-auth.guard";

@ApiTags("Famílias")
@Controller("familia")
export class FamiliaController {
  constructor(private readonly familiaService: FamiliaService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: "Registrar nova família" })
  @ApiResponse({
    status: 201,
    description: "Família registrada com sucesso",
    type: FamiliaEntity,
  })
  @ApiResponse({ status: 400, description: "Dados inválidos" })
  async create(@Body() createFamiliaDto: CreateFamiliaDto) {
    return this.familiaService.create(createFamiliaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: "Listar todas as famílias" })
  @ApiResponse({
    status: 200,
    description: "Lista de famílias",
    type: [FamiliaEntity],
  })
  async findAll() {
    return this.familiaService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get("detalhes")
  @ApiOperation({ summary: "Listar todas as famílias com detalhes" })
  @ApiResponse({
    status: 200,
    description: "Lista de famílias com detalhes",
    type: [FamiliaEntity],
  })
  async getAllFamiliesDetails() {
    return this.familiaService.getAllFamiliesDetails();
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  @ApiOperation({ summary: "Buscar família por ID" })
  @ApiParam({ name: "id", description: "ID da família" })
  @ApiResponse({
    status: 200,
    description: "Família encontrada",
    type: FamiliaEntity,
  })
  @ApiResponse({ status: 404, description: "Família não encontrada" })
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.familiaService.findOne(BigInt(id));
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  @ApiOperation({ summary: "Atualizar família" })
  @ApiParam({ name: "id", description: "ID da família" })
  @ApiResponse({
    status: 200,
    description: "Família atualizada com sucesso",
    type: FamiliaEntity,
  })
  @ApiResponse({ status: 404, description: "Família não encontrada" })
  @ApiResponse({ status: 400, description: "Dados inválidos" })
  async update(@Param("id", ParseIntPipe) id: number, @Body() updateFamiliaDto: UpdateFamiliaDto) {
    return this.familiaService.update(BigInt(id), updateFamiliaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: "Remover família" })
  @ApiParam({ name: "id", description: "ID da família" })
  @ApiResponse({ status: 204, description: "Família removida com sucesso" })
  @ApiResponse({ status: 404, description: "Família não encontrada" })
  async remove(@Param("id", ParseIntPipe) id: number) {
    await this.familiaService.remove(BigInt(id));
  }
}
