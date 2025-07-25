export interface UpdatePessoaPayload {
  id_familia?: string;
  nome?: string;
  data_nascimento?: string;
  rg?: string;
  cpf?: string;
  foto_url?: string;
  observacoes?: string;
}

export interface Pessoa {
  id_pessoa: string;
  id_familia: string;
  nome: string;
  data_nascimento: string;
  rg: string | null;
  cpf: string | null;
  foto_url: string | null;
  observacoes: string | null;
  familia: {
    id_familia: string;
    nome: string;
  } | null;
}

export interface ModalDetalhesPessoaProps {
  pessoa: Pessoa;
}
