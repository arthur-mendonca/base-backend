import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "./prisma/prisma.module";

import { ResponsavelModule } from "./responsavel/responsavel.module";
import { VoluntarioModule } from "./voluntario/voluntario.module";
import { FamiliaModule } from "./familia/familia.module";
import { AuthModule } from "./auth/auth.module";
import { AuditMiddleware } from "./auth/auditMiddleware";
import { CestaBasicaModule } from "./cesta-basica/cestabasica.module";
import { FrequenciaModule } from "./frequencia/frequencia.module";
import { CriancaModule } from "./pessoa/crianca/crianca.module";
import { PessoaModule } from "./pessoa/pessoa.module";
import { BeneficiarioExternoModule } from "./beneficiario-externo/beneficiario-externo.module";
import { ParceiroModule } from "./parceiro/parceiro.module";
import { DoacaoModule } from "./doacao/doacao.module";
import { ItemDoadoModule } from "./item-doado/item-doado.module";
import { AtividadeVoluntarioModule } from "./atividade-voluntario/atividade-voluntario.module";
import { AtividadeModule } from "./atividade/atividade.module";
import { UserModule } from "./user/user.module";
import { ServicoPrestadoModule } from "./servico-prestado/servico-prestado.module";
import { ProdutoModule } from "./produto/produto.module";
import { ProdutoCestaModule } from "./produto-cesta/produto-cesta.module";
import { MateriaModule } from "./materia/materia.module";
import { MatriculaAtividadeModule } from "./matriculaAtividade/matriculaAtividade.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,
    UserModule,
    CriancaModule,
    ResponsavelModule,
    VoluntarioModule,
    FamiliaModule,
    PessoaModule,
    BeneficiarioExternoModule,
    ParceiroModule,
    DoacaoModule,
    ItemDoadoModule,
    AtividadeVoluntarioModule,
    ServicoPrestadoModule,
    ProdutoModule,
    ProdutoCestaModule,
    AtividadeModule,
    MateriaModule,
    CestaBasicaModule,
    FrequenciaModule,
    MatriculaAtividadeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuditMiddleware).forRoutes("*"); // Aplica o middleware em todas as rotas
  }
}
