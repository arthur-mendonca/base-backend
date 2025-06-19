import { Parceiro } from "@prisma/client";

export class ParceiroEntity implements Parceiro {
  id_parceiro: bigint;
  nome: string;
  tipo: string;
  email: string;
  telefone: string;
  contribuicao: string;
}
