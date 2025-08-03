export interface CestaBasica {
  id_cesta: string;
  id_responsavel?: string;
  id_beneficiario?: string;
  data_entrega: string;
  observacoes?: string;
  responsavel?: { nome: string };
  beneficiario_externo?: { nome: string };
  produtos: Array<{
    produto: { nome: string; unidade_medida: string };
    quantidade: number;
  }>;
}

export interface CestaCreatePayload {
  id_responsavel?: number;
  data_entrega: string;
  id_beneficiario: bigint | null;
  id_doacao: bigint | null;
  observacoes?: string;
  produtos?: Array<{
    id_produto: number;
    quantidade: number;
  }>;
}
