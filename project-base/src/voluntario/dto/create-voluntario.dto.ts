import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateVoluntarioDto {
  @ApiProperty({
    description: "Nome do voluntário",
    example: "Maria Silva",
  })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({
    description: "CPF do voluntário",
    example: "123.456.789-00",
  })
  @IsNotEmpty()
  @IsString()
  cpf: string;

  @ApiProperty({
    description: "E-mail do voluntário",
    example: "maria.silva@example.com",
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: "Telefone de contato",
    example: "(11) 98765-4321",
  })
  @IsNotEmpty()
  @IsString()
  telefone: string;

  @ApiProperty({
    description: "Disponibilidade de tempo",
    example: "Segundas e Quartas à tarde",
  })
  @IsNotEmpty()
  @IsString()
  disponibilidade: string;

  @ApiProperty({
    description: "Área de atuação",
    example: "Educação infantil",
  })
  @IsNotEmpty()
  @IsString()
  area_atuacao: string;

  @ApiProperty({
    description: "Confirmação de resposta ao questionário",
    example: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  respondeu_questionario: boolean;

  @ApiProperty({
    description: "Confirmação de aceitação dos termos",
    example: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  aceitou_termos: boolean;
}
