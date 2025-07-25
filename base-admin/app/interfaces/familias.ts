export interface Familia {
  id_familia: string;
  nome: string;
  numero_dependentes: number;
  id_responsavel: string | null;
  observacoes: string | null;
  data_cadastro: string;
}

// export type FamiliaResumo = Pick<Familia, "id_familia" | "nome">;
