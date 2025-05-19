import { Parceiro } from "generated/prisma";

export class ParceiroEntity implements Parceiro {
  id_parceiro: number;
  nome: string;
  tipo: string;
  email: string;
  telefone: string;
  contribuicao: string;
}
