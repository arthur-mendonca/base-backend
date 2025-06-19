import { Crianca } from "@prisma/client";

export class CriancaEntity implements Crianca {
  id_crianca: bigint;
  id_responsavel: bigint;
  nome: string;
  data_nascimento: Date;
  rg: string;
  cpf: string;
}
