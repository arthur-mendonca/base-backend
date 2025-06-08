// Estratégia JWT para validar o token usando Passport
import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { UserService } from "../user/user.service";
import { JwtPayload, UserRole, isValidUserRole, User } from "./interfaces/auth.interface";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
   async validate(payload: JwtPayload): Promise<User> {
     const user = await this.userService.findById(payload.sub);
     if (user == null) {
       throw new UnauthorizedException();
     }
     return user;
   }
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
  
}