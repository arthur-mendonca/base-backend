import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    if (!process.env.SECRET_KEY) {
      throw new Error("SECRET_KEY não definida nas variáveis de ambiente");
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET_KEY,
    });
  }

  async validate(payload: { email: string; password: string }): Promise<{ id: number; email: string } | null> {
    const user = (await this.authService.login(payload.email, payload.password)) as {
      id: number;
      email: string;
    } | null;
    if (!user) {
      throw new UnauthorizedException("Invalid e-mail or password");
    }
    return user;
  }
}
