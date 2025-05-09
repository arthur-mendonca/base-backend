import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Responsavel } from './responsavel.entity';
import { ResponsavelService } from './responsavel.service';
import { ResponsavelController } from './responsavel.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Responsavel])],
  providers: [ResponsavelService],
  controllers: [ResponsavelController],
})
export class ResponsavelModule {}