import { IsEmail, IsString } from "class-validator";

export class LoginDto {
  @IsEmail()
  email: string; // Campo para o email do usuário

  @IsString()
  senha: string; // Campo para a senha do usuário
}
