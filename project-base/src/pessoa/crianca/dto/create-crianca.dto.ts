import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, IsDate, IsNotEmpty, IsOptional } from "class-validator";

export class CreateCriancaDto {
  @ApiProperty({
    description: "ID da família à qual a criança pertence",
    example: "1234567890",
  })
  @IsNotEmpty()
  id_familia: bigint;

  @ApiProperty({
    description: "Nome completo da criança",
    example: "Maria Silva",
  })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({
    description: "Data de nascimento da criança",
    example: "2020-01-01",
  })
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  data_nascimento: Date;

  @ApiPropertyOptional({
    description: "Número do RG da criança",
    example: "12345678X",
    required: false,
  })
  @IsOptional()
  @IsString()
  rg?: string;

  @ApiPropertyOptional({
    description: "Número do CPF da criança",
    example: "123.456.789-00",
    required: false,
  })
  @IsOptional()
  @IsString()
  cpf?: string;

  @ApiPropertyOptional({
    description: "URL da foto da criança",
    example: "https://exemplo.com/foto.jpg",
    required: false,
  })
  @IsOptional()
  @IsString()
  foto_url?: string;

  @ApiPropertyOptional({
    description: "Observações sobre a criança",
    example: "Tem alergia a amendoim",
    required: false,
  })
  @IsOptional()
  @IsString()
  observacoes?: string;
}
