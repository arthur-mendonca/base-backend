import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsDateString, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateResponsavelDto {
  @ApiProperty({
    description: "ID da família à qual o responsável será vinculado. A família já deve existir.",
    example: "1234567890123456789",
  })
  @IsNotEmpty({ message: "O ID da família é obrigatório." })
  @IsNumber()
  id_familia: bigint;

  @ApiProperty({ description: "Nome do responsável" })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({ description: "CPF do responsável" })
  @IsNotEmpty()
  @IsString()
  cpf: string;

  @ApiProperty({ description: "RG do responsável" })
  @IsNotEmpty()
  @IsString()
  rg: string;

  @ApiProperty({ description: "Data de nascimento" })
  @IsNotEmpty()
  @IsDateString()
  data_nascimento: Date;

  @ApiProperty({ description: "Telefone de contato" })
  @IsNotEmpty()
  @IsString()
  telefone: string;

  @ApiProperty({ description: "Endereço completo" })
  @IsNotEmpty()
  @IsString()
  endereco: string;

  @ApiPropertyOptional({ description: "E-mail de contato", required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ description: "Ocupação profissional", required: false })
  @IsOptional()
  @IsString()
  ocupacao?: string;

  @ApiPropertyOptional({ description: "URL da foto do responsável", required: false })
  @IsOptional()
  @IsString()
  foto_url?: string;
}
