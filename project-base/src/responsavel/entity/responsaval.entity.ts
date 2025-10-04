import { Familia, Responsavel } from "@prisma/client";

export class ResponsavelEntity implements Responsavel {
  id_responsavel: bigint;
  nome: string;
  cpf: string;
  rg: string;
  data_nascimento: Date;
  telefone: string;
  email: string | null;
  ocupacao: string | null;
  endereco: string;
  foto_url: string | null;
  familia: Familia | null;
}
