import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsIn, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    description: "Nome do usuário",
    example: "João Silva",
  })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({
    description: "E-mail do usuário (único)",
    example: "joao.silva@example.com",
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: "Senha do usuário",
    example: "senha123",
  })
  @IsNotEmpty()
  @IsString()
  senha: string;

  @ApiProperty({
    description: "Perfil do usuário",
    example: "admin",
    enum: ["admin", "usuario"],
  })
  @IsNotEmpty()
  @IsIn(["admin", "usuario"])
  perfil: "admin" | "usuario";
}
