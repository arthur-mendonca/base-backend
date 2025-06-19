import { CestaBasica } from "@prisma/client";

export class CestaBasicaEntity implements CestaBasica {
  id_cesta: bigint;
  id_responsavel: bigint;
  data_entrega: Date;
  quantidade: number;
  observacoes: string;
}
