export interface Produto {
  id_produto: string;
  nome: string;
  descricao: string;
  is_basico: boolean;
  unidade_medida: string;
  //   produtos_cesta: string[];
}

export type ProdutoCreatePayload = Pick<
  Produto,
  "nome" | "descricao" | "is_basico" | "unidade_medida"
>;

export type ProdutoUpdatePayload = Partial<Produto>;
