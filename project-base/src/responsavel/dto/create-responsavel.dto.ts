import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateResponsavelDto {
  @ApiProperty({
    description: "Nome do responsável",
    example: "João da Silva",
  })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({
    description: "CPF do responsável",
    example: "123.456.789-00",
  })
  @IsNotEmpty()
  @IsString()
  cpf: string;

  @ApiProperty({
    description: "RG do responsável",
    example: "12.345.678-9",
  })
  @IsNotEmpty()
  @IsString()
  rg: string;

  @ApiProperty({
    description: "Parentesco com a criança",
    example: "Pai",
  })
  @IsNotEmpty()
  @IsString()
  parentesco_com_crianca: string;

  @ApiProperty({
    description: "Telefone de contato",
    example: "(11) 98765-4321",
  })
  @IsNotEmpty()
  @IsString()
  telefone: string;

  @ApiProperty({
    description: "E-mail de contato",
    example: "joao.silva@example.com",
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: "Ocupação profissional",
    example: "Professor",
  })
  @IsNotEmpty()
  @IsString()
  ocupacao: string;

  @ApiProperty({
    description: "Endereço completo",
    example: "Rua das Flores, 123 - Bairro Jardim - São Paulo/SP",
  })
  @IsNotEmpty()
  @IsString()
  endereco: string;
}
