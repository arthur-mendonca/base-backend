import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { UserService } from "../user/user.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private userService: UserService,
    private configService: ConfigService
  ) {
    const secretKey = configService.get<string>("SECRET_KEY");
    
    if (!secretKey) {
      throw new Error("SECRET_KEY não definida nas variáveis de ambiente");
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secretKey,
    });
  }

  async validate(payload: { sub: number; email: string; perfil: string }): Promise<any> {
    const user = await this.userService.findByEmail(payload.email);
    if (!user) {
      throw new UnauthorizedException("Usuario não encontrado");
    }

    return {
      id_usuario: user.id_usuario,
      email: user.email,
      perfil: user.perfil,
    };
  }
}