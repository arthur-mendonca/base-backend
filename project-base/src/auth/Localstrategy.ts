import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ 
      usernameField: 'email',
      passwordField: 'senha'
    });
  }

  async validate(email: string, senha: string): Promise<any> {
    console.log('LocalStrategy validate called with:', { email, senha }); // Debug
    
    try {
      const user = await this.authService.validateUser(email, senha);
      console.log('User validated successfully:', user); // Debug
      return user;
    } catch (error) {
      console.log('Validation failed:', error.message); // Debug
      throw new UnauthorizedException('Credenciais inválidas');
    }
  }
}