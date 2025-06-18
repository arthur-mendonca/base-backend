// Módulo de autenticação do NestJS que junta controllers, providers e módulos necessários
import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";
import { UsuarioModule } from "src/user/user.module"; 
import { LocalStrategy } from "./Localstrategy";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),  // Configuração global de variáveis de ambiente
    UsuarioModule,  // Módulo do usuário para acesso a dados
    PassportModule, // Módulo de autenticação Passport
    JwtModule.registerAsync({
      imports: [ConfigModule], // Importa módulo de configuração
      inject: [ConfigService], // Injeta serviço de configuração
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>("SECRET_KEY") || 'your-fallback-secret',  // Chave secreta JWT
        signOptions: { expiresIn: "24h" }, // Expiração do token
      }),
    }),
  ],
  controllers: [AuthController], // Controller de autenticação
  providers: [AuthService, LocalStrategy, JwtStrategy],  // Services e estratégias
  exports: [AuthService], // Exporta para uso em outros módulos
})
export class AuthModule {}