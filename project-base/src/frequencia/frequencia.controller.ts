import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { FrequenciaService } from './frequencia.service';
import { Frequencia } from './frequencia.entity';

@Controller('frequencia')
export class FrequenciaController {
  constructor(private readonly frequenciaService: FrequenciaService) {}

  @Post()
  create(@Body() frequencia: Frequencia): Promise<Frequencia> {
    return this.frequenciaService.create(frequencia);
  }

  @Get()
  findAll(): Promise<Frequencia[]> {
    return this.frequenciaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Frequencia | null> {
    return this.frequenciaService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() frequencia: Frequencia): Promise<Frequencia | null> {
    return this.frequenciaService.update(id, frequencia);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.frequenciaService.remove(id);
  }
}