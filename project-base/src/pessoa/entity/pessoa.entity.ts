import { Pessoa as PessoaPrisma } from "@prisma/client";

export class PessoaEntity implements PessoaPrisma {
  id_pessoa: bigint;
  id_familia: bigint;
  nome: string;
  data_nascimento: Date;
  rg: string | null;
  cpf: string | null;
  foto_url: string | null;
  observacoes: string | null;
  ehCrianca: boolean;
  matriculada_escola: boolean;
  nome_escola: string | null;
}
