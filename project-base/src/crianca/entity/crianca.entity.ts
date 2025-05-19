import { Crianca } from "generated/prisma";

export class CriancaEntity implements Crianca {
  id_crianca: number;
  id_responsavel: number;
  nome: string;
  data_nascimento: Date;
  rg: string;
  cpf: string;
}
