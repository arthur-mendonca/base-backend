import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crianca } from './crianca.entity';
import { CriancaService } from './crianca.service';
import { CriancaController } from './crianca.controller';
import { ResponsavelModule } from 'src/responsavel/responsavel.module';

@Module({
  imports: [TypeOrmModule.forFeature([Crianca]),ResponsavelModule,],
  providers: [CriancaService],
  controllers: [CriancaController],
})
export class CriancaModule {}