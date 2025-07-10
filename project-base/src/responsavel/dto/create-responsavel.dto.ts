import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsDateString, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

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
    description: "Data de nascimento",
    example: "1980-05-15",
  })
  @IsNotEmpty()
  @IsDateString()
  data_nascimento: Date;

  @ApiProperty({
    description: "Telefone de contato",
    example: "(11) 98765-4321",
  })
  @IsNotEmpty()
  @IsString()
  telefone: string;

  @ApiPropertyOptional({
    description: "E-mail de contato",
    example: "joao.silva@example.com",
    required: false,
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({
    description: "Ocupação profissional",
    example: "Professor",
    required: false,
  })
  @IsOptional()
  @IsString()
  ocupacao?: string;

  @ApiProperty({
    description: "Endereço completo",
    example: "Rua das Flores, 123 - Bairro Jardim - São Paulo/SP",
  })
  @IsNotEmpty()
  @IsString()
  endereco: string;

  @ApiPropertyOptional({
    description: "URL da foto do responsável",
    example: "https://storage.example.com/fotos/joao-silva.jpg",
    required: false,
  })
  @IsOptional()
  @IsString()
  foto_url?: string;
}
