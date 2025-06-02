import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../user/user.service";
import { LoginResponse } from "./interfaces/auth.interface";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    console.log('AuthService validateUser called with:', { email, password }); // Debug
    
    try {
      const user = await this.userService.findByEmail(email);
      console.log('User found:', user ? 'Yes' : 'No'); // Debug
      
      if (!user) {
        throw new UnauthorizedException('Email não encontrado');
      }
      
      console.log('Comparing passwords...'); // Debug
      const senhaValida = await bcrypt.compare(password, user.senha);
      console.log('Password valid:', senhaValida); // Debug
      
      if (!senhaValida) {
        throw new UnauthorizedException('Senha incorreta');
      }
      
      // Retorna o usuário sem a senha para segurança
      const { senha, ...result } = user;
      console.log('Returning user:', result); // Debug
      return result;
    } catch (error) {
      console.log('Error in validateUser:', error.message); // Debug
      throw error;
    }
  }

  async generateToken(user: any): Promise<LoginResponse> {
    console.log('Generating token for user:', user); // Debug
    
    const payload = { 
      sub: user.id_usuario, 
      email: user.email, 
      perfil: user.perfil 
    };
    
    const token = await this.jwtService.signAsync(payload);
    console.log('Token generated successfully'); // Debug
    
    return {
      accessToken: token,
    };
  }

  async login(email: string, pass: string): Promise<LoginResponse> {
    const user = await this.validateUser(email, pass);
    return this.generateToken(user);
  }
}