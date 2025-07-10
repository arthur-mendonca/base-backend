import { Pessoa } from "@prisma/client";

export class CriancaEntity implements Pessoa {
  id_pessoa: bigint;
  id_familia: bigint;
  nome: string;
  data_nascimento: Date;
  rg: string | null;
  cpf: string | null;
  foto_url: string | null;
  observacoes: string | null;
}
