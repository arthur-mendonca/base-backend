  import { ApiProperty } from "@nestjs/swagger";
  import { IsEmail, IsIn, IsNotEmpty, IsString, MinLength } from "class-validator";

  export class CreateUserDto {
    @ApiProperty({
      description: "Nome do usuário",
      example: "João Silva",
    })
    @IsNotEmpty({ message: "O nome não pode ser vazio." })
    @IsString({ message: "O nome deve ser uma string." })
    nome: string;

    @ApiProperty({
      description: "E-mail do usuário (único)",
      example: "joao.silva@example.com",
    })
    @IsEmail({}, { message: "O e-mail informado é inválido." })
    @IsNotEmpty({ message: "O e-mail não pode ser vazio." })
    email: string;

    @ApiProperty({
      description: "Senha do usuário",
      example: "senha123",
    })
    @IsNotEmpty({ message: "A senha não pode ser vazia." })
    @IsString({ message: "A senha deve ser uma string." })
    @MinLength(6, { message: "A senha deve ter no mínimo 6 caracteres." })
    senha: string;

    @ApiProperty({
      description: "Perfil do usuário",
      example: "admin",
      enum: ["admin", "usuario"],
    })
    @IsNotEmpty({ message: "O perfil não pode ser vazio." })
    @IsIn(["admin", "usuario"], { message: "O perfil deve ser 'admin' ou 'usuario'." })
    perfil: "admin" | "usuario";
  }