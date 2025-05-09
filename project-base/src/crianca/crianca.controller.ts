import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CriancaService } from './crianca.service';
import { Crianca } from './crianca.entity';

@Controller('crianca')
export class CriancaController {
  constructor(private readonly criancaService: CriancaService) {}

  @Post()
  create(@Body() crianca: Crianca): Promise<Crianca> {
    return this.criancaService.create(crianca);
  }

  @Get()
  findAll(): Promise<Crianca[]> {
    return this.criancaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Crianca | null> {
    return this.criancaService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() crianca: Crianca): Promise<Crianca | null> {
    return this.criancaService.update(id, crianca);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.criancaService.remove(id);
  }
}