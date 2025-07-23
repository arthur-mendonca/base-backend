import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString, IsNumber } from "class-validator";

export class CreateFamiliaDto {
  @ApiProperty({ description: "Nome da família", example: "Família Silva" })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({ description: "Número de dependentes", example: 3 })
  @IsNotEmpty()
  @IsInt()
  numero_dependentes: number;

  @ApiPropertyOptional({ description: "ID do responsável", example: "1234567890", required: false })
  @IsOptional()
  @IsNumber()
  id_responsavel?: bigint;

  @ApiPropertyOptional({ description: "Observações", example: "Necessita acompanhamento", required: false })
  @IsOptional()
  @IsString()
  observacoes?: string;
}
