import { Controller, Post, Body, HttpCode, HttpStatus, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { LocalAuthGuard } from "./local-auth.guard";
import { LoginResponse } from "./interfaces/auth.interface";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @Post("login")
  async signIn(@Body() user: LoginDto): Promise<LoginResponse> {
    return this.authService.login(user.email, user.senha);
  }
}
