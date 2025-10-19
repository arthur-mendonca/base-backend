export class CriancaEntity {
  id_crianca: bigint;
  id_familia: bigint;
  nome: string;
  data_nascimento: Date;
  rg: string | null;
  cpf: string | null;
  foto_url: string | null;
  observacoes: string | null;
  matriculada_escola: boolean;
  nome_escola: string | null;
}
