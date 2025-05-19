import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "./../user/user.service";
import { LoginResponse } from "./interfaces/auth.interface";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, pass: string): Promise<LoginResponse> {
    const user = await this.userService.findByEmail(email);
    if (user?.senha !== pass) {
      // A validação da senha ocorre aqui
      throw new UnauthorizedException("Incorrect e-mail or password");
    }
    const payload = { sub: user.id_usuario, email: user.email };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
