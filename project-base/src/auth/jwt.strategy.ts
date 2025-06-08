// Estratégia JWT para validar o token usando Passport
import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { UserService } from "../user/user.service";
import { JwtPayload, UserRole, User } from "./interfaces/auth.interface";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  async validate(payload: JwtPayload): Promise<User> {
    const user = await this.userService.findById(payload.sub);
    if (user == null) {
      throw new UnauthorizedException();
    }
    // Mapear 'perfil' de string para enum UserRole
    const mappedUser: User = {
      ...user,
      perfil: UserRole[user.perfil.toUpperCase() as keyof typeof UserRole]
    };
    return mappedUser;
  }
  protected readonly logger = new Logger(JwtStrategy.name);

  constructor(
    protected userService: UserService,
    protected configService: ConfigService
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

}