import { Frequencia } from "@prisma/client";

export class FrequenciaEntity implements Frequencia {
  id_frequencia: bigint;
  id_crianca: bigint;
  atividade: string;
  data: Date;
  presenca: boolean;
}
