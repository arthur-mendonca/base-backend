import { Familia } from "@prisma/client";

export class FamiliaEntity implements Familia {
  id_familia: bigint;
  nome: string;
  numero_dependentes: number;
  id_responsavel: bigint;
  observacoes: string | null;
  data_cadastro: Date;
  elegivel_cesta_basica: boolean;
}
