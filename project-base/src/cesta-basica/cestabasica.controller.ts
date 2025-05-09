import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CestaBasicaService } from './cestabasica.service';
import { CestaBasica } from './cestabasica.entity';

@Controller('cesta-basica')
export class CestaBasicaController {
  constructor(private readonly cestaBasicaService: CestaBasicaService) {}

  @Post()
  create(@Body() cestaBasica: CestaBasica): Promise<CestaBasica> {
    return this.cestaBasicaService.create(cestaBasica);
  }

  @Get()
  findAll(): Promise<CestaBasica[]> {
    return this.cestaBasicaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<CestaBasica | null> {
    return this.cestaBasicaService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() cestaBasica: CestaBasica): Promise<CestaBasica | null> {
    return this.cestaBasicaService.update(id, cestaBasica);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.cestaBasicaService.remove(id);
  }
}