// auth.service.ts - Simplified version
import { Injectable, UnauthorizedException, Logger } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";
import * as bcrypt from "bcrypt";
import { JwtPayload, LoginResponse, User, UserRole } from "./interfaces/auth.interface";

@Injectable()
export class AuthService {
  async validateUser(email: string, senha: string): Promise<User | null> {
    const userEntity = await this.userService.findByEmail(email);
    if (userEntity && (await bcrypt.compare(senha, userEntity.senha))) {
      // Retorna o usuário se a senha estiver correta
      return {
        id_usuario: userEntity.id_usuario,
        nome: userEntity.nome,
        email: userEntity.email,
        perfil: UserRole[userEntity.perfil.toUpperCase() as keyof typeof UserRole],
      }; // Mapeia UserEntity para User
    }
    return null; // Retorna null se a validação falhar
  }

  private readonly logger = new Logger(AuthService.name);

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  // Método que valida o usuário pelo email e senha recebidos

  // Gera o token JWT para o usuário autenticado
  async generateToken(user: Omit<User, "senha">): Promise<LoginResponse> {
    const payload: JwtPayload = {
      sub: user.id_usuario,
      email: user.email,
      perfil: user.perfil,
    };

    // Gera o token assinando o payload
    const accessToken = await this.jwtService.signAsync(payload);

    // Retorna o token e dados públicos do usuário
    return {
      accessToken,
      user: {
        id: user.id_usuario,
        email: user.email,
        perfil: user.perfil,
        nome: user.nome,
      },
    };
  }
}
