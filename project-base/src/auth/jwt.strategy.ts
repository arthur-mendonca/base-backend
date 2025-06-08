// Estratégia JWT para validar o token usando Passport
import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { UserService } from "../user/user.service";
import { JwtPayload, UserRole, isValidUserRole, User } from "./interfaces/auth.interface";
import { DatabaseUser, convertDatabaseUserToAppUser } from "./interfaces/database.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(JwtStrategy.name);

  constructor(
    private userService: UserService,
    private configService: ConfigService
  ) {
    // Obtém chave secreta do config service
    const secretKey = configService.get<string>("SECRET_KEY");
    // Garante que a chave secreta está definida
    if (!secretKey) {
      throw new Error("SECRET_KEY não definida nas variáveis de ambiente");
    }
    // Configura a estratégia JWT com extração do token do header e chave secreta
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secretKey,
    });
  }
  // Método chamado para validar o payload do token
  async validate(payload: JwtPayload): Promise<Omit<User, 'senha'>> {
    try {
      // Valida a existência dos campos esperados no payload
      if (!payload.sub || !payload.email || !payload.perfil) {
        throw new UnauthorizedException("Token payload inválido");
      }

      // Usa função para validar se o perfil é válido
      if (!isValidUserRole(payload.perfil)) {
        throw new UnauthorizedException("Perfil de usuário inválido");
      }

      // Verifica se usuário existe no banco pelo ID do payload
      const dbUser = await this.userService.findById(payload.sub);

      if (dbUser == null) {
        throw new UnauthorizedException("Usuário não encontrado");
      }

      // Asserção de tipo segura para usuário do banco
      const databaseUser = dbUser as unknown as DatabaseUser;

      // Verificar se usuário ainda está ativo
      if (!databaseUser.ativo) {
        throw new UnauthorizedException("Usuário inativo");
      }

      // Converte para formato da aplicação sem senha
      const appUser = convertDatabaseUserToAppUser(databaseUser);

      return appUser;
    } catch (error) {
       // Loga erro de validação do token e lança exceção genérica
      this.logger.error(`Erro na validação do token: ${error.message}`);
      throw new UnauthorizedException("Token inválido");
    }
  }
}