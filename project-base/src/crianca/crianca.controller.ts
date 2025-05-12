import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { CriancaService } from './crianca.service';
import { Crianca } from './crianca.entity';
import { CriancaDto } from './crianca.dto';
import { JwtAuthGuard } from '../autenticacao/jwt-auth.guard'; // Importe o guard
@Controller('crianca')
export class CriancaController {
  constructor(private readonly criancaService: CriancaService) { }
 @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() criancaData: CriancaDto): Promise<Crianca> {
      return this.criancaService.create(criancaData);
    }
     @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<CriancaDto[]> {
    return this.criancaService.findAll();
  }
 @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<CriancaDto | null> {
    return this.criancaService.findOne(id);
  }
 @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: number, @Body() crianca: CriancaDto): Promise<CriancaDto | null> {
    return this.criancaService.update(id, crianca);
  }
 @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.criancaService.remove(id);
  }
}