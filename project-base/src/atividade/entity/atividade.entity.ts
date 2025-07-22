import { Atividade, TipoAtividade } from "@prisma/client";

export class AtividadeEntity implements Atividade {
  id_atividade: bigint;
  nome: string;
  descricao: string | null;
  tipo: TipoAtividade;
  publico_alvo: string;
  dias_semana: string;
  horario_inicio: Date;
  horario_fim: Date;
}
