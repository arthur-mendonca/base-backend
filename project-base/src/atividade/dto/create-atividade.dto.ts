import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export enum TipoAtividade {
  RODA_TERAPEUTICA = "roda_terapeutica",
  JIU_JITSU = "jiu_jitsu",
  AULA_REFORCO = "aula_reforco",
  PSICOPEDAGOGIA = "psicopedagogia",
  ALFABETIZACAO_ADULTOS = "alfabetizacao_adultos",
  AULA_MUSICA = "aula_musica",
  OUTRA = "outra",
}

export class CreateAtividadeDto {
  @ApiProperty({
    description: "Nome da atividade",
    example: "Aula de reforço escolar",
  })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiPropertyOptional({
    description: "Descrição detalhada da atividade",
    example: "Aulas de reforço para crianças com dificuldades em matemática",
  })
  @IsOptional()
  @IsString()
  descricao?: string;

  @ApiProperty({
    description: "Tipo da atividade",
    enum: TipoAtividade,
    example: TipoAtividade.AULA_REFORCO,
  })
  @IsNotEmpty()
  @IsEnum(TipoAtividade)
  tipo: TipoAtividade;

  @ApiProperty({
    description: "Público-alvo da atividade",
    example: "Crianças de 7 a 12 anos",
  })
  @IsNotEmpty()
  @IsString()
  publico_alvo: string;

  @ApiProperty({
    description: "Dias da semana em que a atividade ocorre (1=segunda, 7=domingo)",
    example: "1,3,5",
  })
  @IsNotEmpty()
  @IsString()
  dias_semana: string;

  @ApiProperty({
    description: "Horário de início da atividade",
    example: "14:00",
  })
  @IsNotEmpty()
  @IsString()
  horario_inicio: string;

  @ApiProperty({
    description: "Horário de término da atividade",
    example: "16:00",
  })
  @IsNotEmpty()
  @IsString()
  horario_fim: string;
}
