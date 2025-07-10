import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, IsDate, IsNotEmpty, IsOptional } from "class-validator";

export class CreatePessoaDto {
  @ApiProperty({
    description: "ID da família à qual a pessoa pertence",
    example: "1234567890",
  })
  @IsNotEmpty()
  id_familia: bigint;

  @ApiProperty({
    description: "Nome completo da pessoa",
    example: "João Silva",
  })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({
    description: "Data de nascimento",
    example: "1985-01-01",
  })
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  data_nascimento: Date;

  @ApiPropertyOptional({
    description: "Número do RG",
    example: "12345678X",
    required: false,
  })
  @IsOptional()
  @IsString()
  rg?: string;

  @ApiPropertyOptional({
    description: "Número do CPF",
    example: "123.456.789-00",
    required: false,
  })
  @IsOptional()
  @IsString()
  cpf?: string;

  @ApiPropertyOptional({
    description: "URL da foto",
    example: "https://exemplo.com/foto.jpg",
    required: false,
  })
  @IsOptional()
  @IsString()
  foto_url?: string;

  @ApiPropertyOptional({
    description: "Observações sobre a pessoa",
    example: "Precisa de acompanhamento psicológico",
    required: false,
  })
  @IsOptional()
  @IsString()
  observacoes?: string;
}
