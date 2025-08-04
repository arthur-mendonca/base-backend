export interface CriancaCreatePayload {
  id_familia?: string;
  nome: string;
  data_nascimento: string;
  rg?: string;
  cpf?: string;
  foto_url?: string;
  observacoes?: string;
}
