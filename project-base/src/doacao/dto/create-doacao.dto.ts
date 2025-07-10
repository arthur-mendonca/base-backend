import { ApiProperty } from "@nestjs/swagger";
import { TipoDoacao } from "@prisma/client";
import { IsNotEmpty, IsString, IsEnum, IsOptional, IsNumber, IsBoolean, IsUrl } from "class-validator";

export class CreateDoacaoDto {
  @ApiProperty({
    description: "ID do parceiro que fez a doação",
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  id_parceiro?: bigint;

  @ApiProperty({
    description: "Tipo da doação",
    enum: TipoDoacao,
    example: TipoDoacao.monetaria,
  })
  @IsNotEmpty()
  @IsEnum(TipoDoacao)
  tipo: TipoDoacao;

  @ApiProperty({
    description: "Valor da doação (obrigatório para doações monetárias)",
    example: 100.5,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  valor?: number;

  @ApiProperty({
    description: "Descrição da doação",
    example: "Doação mensal de alimentos",
  })
  @IsNotEmpty()
  @IsString()
  descricao: string;

  @ApiProperty({
    description: "URL do comprovante da doação",
    example: "https://example.com/comprovante.pdf",
    required: false,
  })
  @IsOptional()
  @IsUrl()
  comprovante_url?: string;

  @ApiProperty({
    description: "Indica se a doação é anônima",
    example: false,
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  is_anonima?: boolean;
}
