import { Type } from "class-transformer";
import { IsString, IsInt, IsDate, IsNotEmpty } from "class-validator";

export class CriancaDto {
  @IsNotEmpty()
  @IsInt()
  id_responsavel: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  data_nascimento: Date;

  @IsNotEmpty()
  @IsString()
  rg: string;

  @IsNotEmpty()
  @IsString()
  cpf: string;
}
