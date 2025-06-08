// auth.service.ts - Simplified version
import { Injectable, UnauthorizedException, Logger } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";
import * as bcrypt from 'bcrypt';
import { JwtPayload, LoginResponse, User, UserRole } from "./interfaces/auth.interface";
import { DatabaseUser, convertDatabaseUserToAppUser } from "./interfaces/database.interface";

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) { }
  // Método que valida o usuário pelo email e senha recebidos
  async validateUser(email: string, password: string): Promise<Omit<User, 'senha'>> {
    try {
      // Busca usuário no banco pelo email
      const dbUser = await this.userService.findByEmail(email) as DatabaseUser;

      if (!dbUser) {
        throw new UnauthorizedException('Usuário não encontrado');
      }

      // Verificar se usuário está ativo
      if (!dbUser.ativo) {
        throw new UnauthorizedException('Usuário inativo. Contate o administrador.');
      }
      // Compara senha fornecida com senha hash do banco
      const senhaValida = await bcrypt.compare(password, dbUser.senha);

      if (!senhaValida) {
        throw new UnauthorizedException('Senha incorreta');
      }

      // Converte usuário do banco para formato da aplicação sem senha
      const appUser = convertDatabaseUserToAppUser(dbUser);
      // Loga login bem-sucedido
      this.logger.log(`Login bem-sucedido: ${email} (${appUser.perfil})`);
      return appUser;
    } catch (error) {
      // Loga erro no login
      this.logger.error(`Falha no login para ${email}: ${error.message}`);
      throw error;
    }
  }

  // Gera o token JWT para o usuário autenticado
  async generateToken(user: Omit<User, 'senha'>): Promise<LoginResponse> {
    const payload: JwtPayload = {
      sub: user.id_usuario,
      email: user.email,
      perfil: user.perfil
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
        nome: user.nome
      }
    };
  }
}