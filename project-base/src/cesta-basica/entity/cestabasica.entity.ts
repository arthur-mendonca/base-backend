import { CestaBasica } from "@prisma/client";

export class CestaBasicaEntity implements CestaBasica {
  id_cesta: number;
  id_responsavel: number;
  data_entrega: Date;
  quantidade: number;
  observacoes: string;
}
