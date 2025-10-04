import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsNumberString, IsOptional, IsString, Length } from "class-validator";

export class CreateVoluntarioDto {
  @ApiProperty({
    description: "Nome completo do voluntário",
    example: "Maria Silva",
  })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({
    description: "CPF do voluntário (único, somente números)",
    example: "12345678901",
    maxLength: 11,
    minLength: 11,
  })
  @IsNotEmpty()
  @IsNumberString({}, { message: "O CPF deve conter apenas números" })
  @Length(11, 11, { message: "O CPF deve ter exatamente 11 dígitos" })
  cpf: string;

  @ApiProperty({
    description: "RG do voluntário",
    example: "12.345.678-9",
  })
  @IsNotEmpty()
  @IsString()
  rg: string;

  @ApiProperty({
    description: "Endereço completo do voluntário",
    example: "Rua das Flores, 123 - Centro, São Paulo/SP",
  })
  @IsNotEmpty()
  @IsString()
  endereco: string;

  @ApiProperty({
    description: "E-mail de contato do voluntário",
    example: "maria.silva@example.com",
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: "Telefone de contato do voluntário",
    example: "(11) 98765-4321",
  })
  @IsNotEmpty()
  @IsString()
  telefone: string;

  @ApiProperty({
    description: "Disponibilidade de tempo para trabalho voluntário",
    example: "Segundas e Quartas à tarde",
  })
  @IsNotEmpty()
  @IsString()
  disponibilidade: string;

  @ApiProperty({
    description: "Área de atuação do voluntário",
    example: "Educação infantil",
  })
  @IsNotEmpty()
  @IsString()
  area_atuacao: string;

  @ApiProperty({
    description: "Indica se o voluntário possui antecedentes criminais",
    example: false,
    default: false,
  })
  @IsBoolean()
  tem_antecedentes: boolean;

  @ApiPropertyOptional({
    description: "URL do comprovante de antecedentes criminais",
    example: "https://exemplo.com/comprovante.pdf",
    required: false,
  })
  @IsOptional()
  @IsString()
  url_comprovante?: string;

  @ApiProperty({
    description: "Confirmação de resposta ao questionário de inscrição",
    example: true,
  })
  @IsBoolean()
  respondeu_questionario: boolean;

  @ApiProperty({
    description: "Confirmação de aceitação dos termos de voluntariado",
    example: true,
  })
  @IsBoolean()
  aceitou_termos: boolean;
}