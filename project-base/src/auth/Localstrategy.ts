import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
// Implementação da estratégia local para autenticação via email e senha
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(LocalStrategy.name);

  constructor(private authService: AuthService) {
    super({ 
      usernameField: 'email', // Campo usado para o nome de usuário
      passwordField: 'senha'  // Campo usado para senha
    });
  }
 // Método que valida as credenciais
  async validate(email: string, senha: string): Promise<any> {
    this.logger.debug('Validating user login', { email }); 
    
    try {
      // Chama service para validar usuário
      const user = await this.authService.validateUser(email, senha);
      this.logger.debug('User validated successfully'); 
      return user;
    } catch (error) {
      // Se erro, loga e lança exceção Unauthorized
      this.logger.warn('Login validation failed', { email, error: error.message });
      throw new UnauthorizedException('Credenciais inválidas');
    }
  }
}