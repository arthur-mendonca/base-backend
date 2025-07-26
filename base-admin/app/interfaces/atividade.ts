import type { TipoAtividade } from "~/enums/atividades";

export interface Atividade {
  id_atividade: string;
  nome: string;
  descricao: string;
  tipo: TipoAtividade;
  publico_alvo: string;
  dias_semana: string;
  horario_inicio: string;
  horario_fim: string;
}

export interface UpdateAtividadePayload {
  nome?: string;
  descricao?: string;
  tipo?: string;
  publico_alvo?: string;
  dias_semana?: string;
  horario_inicio?: string;
  horario_fim?: string;
}
