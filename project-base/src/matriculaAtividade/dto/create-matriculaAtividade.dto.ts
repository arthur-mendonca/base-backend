import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { StatusMatricula } from "@prisma/client";

export class CreateMatriculaAtividadeDto {
  @ApiProperty({
    description: "ID da pessoa (criança) a ser matriculada",
    example: "123456789012345678",
  })
  @IsNotEmpty()
  @IsNumber()
  id_pessoa: bigint;

  @ApiProperty({
    description: "ID da atividade na qual a pessoa será matriculada",
    example: "987654321098765432",
  })
  @IsNotEmpty()
  @IsNumber()
  id_atividade: bigint;

  @ApiPropertyOptional({
    description: "Status inicial da matrícula",
    enum: StatusMatricula,
    default: StatusMatricula.ATIVA,
  })
  @IsOptional()
  @IsEnum(StatusMatricula)
  status?: StatusMatricula;

  @ApiPropertyOptional({
    description: "Observações sobre a matrícula",
    example: "Matrícula realizada pela coordenação.",
  })
  @IsOptional()
  @IsString()
  observacoes?: string;
}
