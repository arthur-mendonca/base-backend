import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ParceiroService } from './parceiro.service';
import { Parceiro } from './parceiro.entity';

@Controller('parceiro')
export class ParceiroController {
  constructor(private readonly parceiroService: ParceiroService) {}

  @Post()
  create(@Body() parceiro: Parceiro): Promise<Parceiro> {
    return this.parceiroService.create(parceiro);
  }

  @Get()
  findAll(): Promise<Parceiro[]> {
    return this.parceiroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Parceiro | null> {
    return this.parceiroService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() parceiro: Parceiro): Promise<Parceiro | null> {
    return this.parceiroService.update(id, parceiro);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.parceiroService.remove(id);
  }
}