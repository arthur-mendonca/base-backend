import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CriancaService } from './crianca.service';
import { Crianca } from './crianca.entity';
import { CriancaDto } from './crianca.dto';
@Controller('crianca')
export class CriancaController {
  constructor(private readonly criancaService: CriancaService) { }

    @Post()
    async create(@Body() criancaData: CriancaDto): Promise<Crianca> {
      return this.criancaService.create(criancaData);
    }
  @Get()
  async findAll(): Promise<CriancaDto[]> {
    return this.criancaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<CriancaDto | null> {
    return this.criancaService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() crianca: CriancaDto): Promise<CriancaDto | null> {
    return this.criancaService.update(id, crianca);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.criancaService.remove(id);
  }
}