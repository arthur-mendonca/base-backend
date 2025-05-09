import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Frequencia } from './frequencia.entity';
import { FrequenciaService } from './frequencia.service';
import { FrequenciaController } from './frequencia.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Frequencia])],
  providers: [FrequenciaService],
  controllers: [FrequenciaController],
})
export class FrequenciaModule {}