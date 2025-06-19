import { Responsavel } from "@prisma/client";

export class ResponsavelEntity implements Responsavel {
  id_responsavel: bigint;
  nome: string;
  cpf: string;
  rg: string;
  parentesco_com_crianca: string;
  telefone: string;
  email: string;
  ocupacao: string;
  endereco: string;
}
