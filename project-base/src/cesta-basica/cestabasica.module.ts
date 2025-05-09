import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CestaBasica } from './cestabasica.entity';
import { CestaBasicaService } from './cestabasica.service';
import { CestaBasicaController } from './cestabasica.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CestaBasica])],
  providers: [CestaBasicaService],
  controllers: [CestaBasicaController],
})
export class CestaBasicaModule {}