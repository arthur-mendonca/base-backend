import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ResponsavelService } from './responsavel.service';
import { Responsavel } from './responsavel.entity';

@Controller('responsavel')
export class ResponsavelController {
  constructor(private readonly responsavelService: ResponsavelService) {}

  @Post()
  create(@Body() responsavel: Responsavel): Promise<Responsavel> {
    return this.responsavelService.create(responsavel);
  }

  @Get()
  findAll(): Promise<Responsavel[]> {
    return this.responsavelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Responsavel | null> {
    return this.responsavelService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() responsavel: Responsavel): Promise<Responsavel | null> {
    return this.responsavelService.update(id, responsavel);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.responsavelService.remove(id);
  }
}