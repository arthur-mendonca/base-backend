import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString } from "class-validator";
import { Type } from "class-transformer";

export class CreateCestaBasicaDto {
  @ApiProperty({
    description: "ID do responsável que recebeu a cesta básica",
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  id_responsavel: number;

  @ApiProperty({
    description: "Data de entrega da cesta básica",
    example: "2025-05-19T10:00:00.000Z",
  })
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  data_entrega: Date;

  @ApiProperty({
    description: "Quantidade de itens na cesta básica",
    example: 1,
  })
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  quantidade: number;

  @ApiProperty({
    description: "Observações sobre a entrega da cesta básica",
    example: "Entregue em mãos",
  })
  @IsString()
  @IsOptional()
  observacoes: string;
}
