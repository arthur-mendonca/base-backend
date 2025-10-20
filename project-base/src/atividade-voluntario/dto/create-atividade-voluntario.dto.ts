import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateAtividadeVoluntarioDto {
  @ApiProperty({
    description: "ID do voluntário que realizou a atividade",
    example: "123456789",
  })
  @IsNotEmpty()
  id_voluntario: bigint;

  @ApiProperty({
    description: "Descrição da atividade realizada",
    example: "Aula de matemática para crianças",
  })
  @IsNotEmpty()
  @IsString()
  descricao: string;

  @ApiProperty({
    description: "Data de realização da atividade",
    example: "2023-01-01T14:00:00Z",
  })
  @IsNotEmpty()
  @IsDateString()
  data_realizacao: Date;

  @ApiProperty({
    description: "Horas trabalhadas na atividade",
    example: 2.5,
  })
  @IsNotEmpty()
  @IsNumber()
  horas_trabalhadas: number;

  @ApiPropertyOptional({
    description: "Observações sobre a atividade",
    example: "Excelente desempenho com as crianças",
    required: false,
  })
  @IsOptional()
  @IsString()
  observacoes?: string;
}
