import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface'; // Crie essa interface para o payload

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET="testuser" // Defina sua chave secreta no .env
    });
  }

  async validate(payload: JwtPayload) {
    return { userId: payload.sub, username: payload.username }; // Retorne os dados do usuário
  }
}