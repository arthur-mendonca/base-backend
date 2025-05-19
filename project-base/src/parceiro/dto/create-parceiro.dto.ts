import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateParceiroDto {
  @ApiProperty({
    description: "Nome do parceiro",
    example: "Empresa XYZ",
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    description: "Tipo de parceria",
    example: "patrocinador",
  })
  @IsString()
  @IsNotEmpty()
  tipo: string;

  @ApiProperty({
    description: "Email do parceiro",
    example: "contato@empresaxyz.com",
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: "Telefone de contato",
    example: "(11) 98765-4321",
  })
  @IsString()
  @IsNotEmpty()
  telefone: string;

  @ApiProperty({
    description: "Tipo de contribuição",
    example: "financeira",
  })
  @IsString()
  @IsNotEmpty()
  contribuicao: string;
}
