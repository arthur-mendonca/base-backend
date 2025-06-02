import { Controller, Post, Body, HttpCode, HttpStatus, UseGuards, Request } from "@nestjs/common";
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
  async login(@Request() req, @Body() loginDto: LoginDto): Promise<LoginResponse> {
    console.log('AuthController login called'); // Debug
    console.log('Request user:', req.user); // Debug
    console.log('Body received:', loginDto); // Debug
    
    // O LocalAuthGuard já validou o usuário e o colocou em req.user
    return this.authService.generateToken(req.user);
  }
}