import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parceiro } from './parceiro.entity';
import { ParceiroService } from './parceiro.service';
import { ParceiroController } from './parceiro.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Parceiro])],
  providers: [ParceiroService],
  controllers: [ParceiroController],
})
export class ParceiroModule {}