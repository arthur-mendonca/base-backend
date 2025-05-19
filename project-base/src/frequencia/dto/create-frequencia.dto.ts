import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsString } from "class-validator";
import { Type } from "class-transformer";

export class CreateFrequenciaDto {
  @ApiProperty({
    description: "ID da criança associada à frequência",
    example: 1,
  })
  @IsNotEmpty()
  @IsInt()
  id_crianca: number;

  @ApiProperty({
    description: "Atividade realizada",
    example: "Aula de Matemática",
  })
  @IsNotEmpty()
  @IsString()
  atividade: string;

  @ApiProperty({
    description: "Data da atividade",
    example: "2025-05-19",
  })
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  data: Date;

  @ApiProperty({
    description: "Status de presença",
    example: true,
  })
  @IsNotEmpty()
  @IsBoolean()
  presenca: boolean;
}
