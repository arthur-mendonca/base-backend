import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crianca } from './crianca.entity';
import { CriancaService } from './crianca.service';
import { CriancaController } from './crianca.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Crianca])],
  providers: [CriancaService],
  controllers: [CriancaController],
})
export class CriancaModule {}