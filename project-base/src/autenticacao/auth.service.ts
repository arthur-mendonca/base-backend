import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service'; // Serviço de usuários
import { LoginDto } from './dto/login.dto'; // DTO para login

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UserService, // Serviço para buscar usuários
    private readonly jwtService: JwtService, // Serviço para gerar tokens JWT
  ) {}

  // Valida o usuário com base no email e senha
  async validateUser(email: string, senha: string): Promise<any> {
    const user = await this.usuarioService.findByEmail(email); // Busca o usuário pelo email
    if (user && user.senha === senha) { // Verifica se a senha está correta
      const { senha, ...result } = user; // Remove a senha do retorno
      return result; // Retorna os dados do usuário sem a senha
    }
    return null; // Retorna null se o usuário não for válido
  }

  // Realiza o login e retorna o token JWT
  async login(loginDto: LoginDto) {
    const { email, senha } = loginDto;
    const user = await this.validateUser(email, senha); // Valida o usuário
    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas'); // Lança erro se inválido
    }

    const payload = { username: user.email, sub: user.id_usuario }; // Define o payload do token
    return {
      access_token: this.jwtService.sign(payload), // Gera o token JWT
    };
  }
}