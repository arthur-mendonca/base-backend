import { Parceiro } from "@prisma/client";

export class ParceiroEntity implements Parceiro {
  id_parceiro: number;
  nome: string;
  tipo: string;
  email: string;
  telefone: string;
  contribuicao: string;
}
