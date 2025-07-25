import type { Responsavel } from "./responsavel";

export interface Familia {
  id_familia: string;
  nome: string;
  numero_dependentes: number;
  id_responsavel: string | null;
  observacoes: string | null;
  data_cadastro: string;
  responsavel: Responsavel | null;
}

// export type FamiliaResumo = Pick<Familia, "id_familia" | "nome">;

export interface UpdateFamiliaPayload {
  nome?: string;
  observacoes?: string | null;
  id_responsavel?: number | null;
}
