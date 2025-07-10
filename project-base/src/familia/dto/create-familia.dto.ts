import { IsString, IsInt, IsOptional, IsNumber } from "class-validator";

export class CreateFamiliaDto {
  @IsString()
  nome: string;

  @IsInt()
  numero_dependentes: number;

  @IsNumber()
  id_responsavel: bigint;

  @IsString()
  @IsOptional()
  observacoes?: string;
}
