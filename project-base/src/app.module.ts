import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "./prisma/prisma.module";
import { UsuarioModule } from "./user/user.module";
import { CriancaModule } from "./crianca/crianca.module";
import { ResponsavelModule } from "./responsavel/responsavel.module";
import { VoluntarioModule } from "./voluntario/voluntario.module";
import { ParceiroModule } from "./parceiro/parceiro.module";
import { CestaBasicaModule } from "./cesta-basica/cestabasica.module";
import { FrequenciaModule } from "./frequencia/frequencia.module";
import { AuthModule } from "./auth/auth.module";
import { AuditMiddleware } from "./auth/auditMiddleware";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,
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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuditMiddleware)
      .forRoutes('*'); // Aplica o middleware em todas as rotas
  }
}