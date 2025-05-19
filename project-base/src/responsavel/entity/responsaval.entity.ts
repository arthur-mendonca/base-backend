import { Responsavel } from "generated/prisma";

export class ResponsavelEntity implements Responsavel {
  id_responsavel: number;
  nome: string;
  cpf: string;
  rg: string;
  parentesco_com_crianca: string;
  telefone: string;
  email: string;
  ocupacao: string;
  endereco: string;
}
