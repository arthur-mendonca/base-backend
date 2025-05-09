import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Voluntario } from './voluntario.entity';
import { VoluntarioService } from './voluntario.service';
import { VoluntarioController} from './voluntario.controller';
@Module({
    imports: [TypeOrmModule.forFeature([Voluntario])],
    providers: [VoluntarioService],
    controllers: [VoluntarioController],
  })
  export class VoluntarioModule {}