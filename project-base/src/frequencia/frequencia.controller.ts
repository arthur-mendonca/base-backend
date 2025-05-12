import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { FrequenciaService } from './frequencia.service';
import { Frequencia } from './frequencia.entity';

@Controller('frequencia')
export class FrequenciaController {
  constructor(private readonly frequenciaService: FrequenciaService) { }

  @Post()
  async create(@Body() frequencia: Frequencia): Promise<Frequencia> {
    return this.frequenciaService.create(frequencia);
  }

  @Get()
  async findAll(): Promise<Frequencia[]> {
    return this.frequenciaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Frequencia | null> {
    return this.frequenciaService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() frequencia: Frequencia): Promise<Frequencia | null> {
    return this.frequenciaService.update(id, frequencia);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.frequenciaService.remove(id);
  }
}