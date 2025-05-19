import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, IsInt, IsDate, IsNotEmpty } from "class-validator";

export class CreateCriancaDto {
  @ApiProperty({
    description: "ID do responsável pela criança",
    example: 1,
  })
  @IsNotEmpty()
  @IsInt()
  id_responsavel: number;

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

  @ApiProperty({
    description: "Número do RG da criança",
    example: "12345678X",
  })
  @IsNotEmpty()
  @IsString()
  rg: string;

  @ApiProperty({
    description: "Número do CPF da criança",
    example: "123.456.789-00",
  })
  @IsNotEmpty()
  @IsString()
  cpf: string;
}
