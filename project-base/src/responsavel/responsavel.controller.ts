import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ResponsavelService } from './responsavel.service';
import { Responsavel } from './responsavel.entity';

@Controller('responsavel')
export class ResponsavelController {
  constructor(private readonly responsavelService: ResponsavelService) { }

  @Post()
  async create(@Body() responsavel: Responsavel): Promise<Responsavel> {
    return this.responsavelService.create(responsavel);
  }

  @Get()
  async findAll(): Promise<Responsavel[]> {
    return this.responsavelService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Responsavel | null> {
    return this.responsavelService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() responsavel: Responsavel): Promise<Responsavel | null> {
    return this.responsavelService.update(id, responsavel);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.responsavelService.remove(id);
  }
}