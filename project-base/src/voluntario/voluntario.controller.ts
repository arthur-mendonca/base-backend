import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { VoluntarioService } from './voluntario.service';
import { Voluntario } from './voluntario.entity';

@Controller('voluntario')
export class VoluntarioController {
  constructor(private readonly voluntarioService: VoluntarioService) { }


  @Post()
  async create(@Body() voluntario: Voluntario): Promise<Voluntario> {
    return this.voluntarioService.create(voluntario);
  }


  @Get()
  async findAll(): Promise<Voluntario[]> {
    return this.voluntarioService.findAll();
  }


  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Voluntario | null> {
    return this.voluntarioService.findOne(id);
  }
}
