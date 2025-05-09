import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './user/user.module';
import { CriancaModule } from './crianca/crianca.module';
import { ResponsavelModule } from './responsavel/responsavel.module';
import { VoluntarioModule } from './voluntario/voluntario.module';
import { ParceiroModule } from './parceiro/parceiro.module';
import { CestaBasicaModule } from './cesta-basica/cestabasica.module';
import { FrequenciaModule } from './frequencia/frequencia.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'migration',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Carregamento automático das entidades
      synchronize: true, // Usar apenas em dev, em produção prefira migrações
    }),
    UsuarioModule,
    CriancaModule,
    ResponsavelModule,
    VoluntarioModule,
    ParceiroModule,
    CestaBasicaModule,
    FrequenciaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
