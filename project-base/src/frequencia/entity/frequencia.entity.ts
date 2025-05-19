import { Frequencia } from "@prisma/client";

export class FrequenciaEntity implements Frequencia {
  id_frequencia: number;
  id_crianca: number;
  atividade: string;
  data: Date;
  presenca: boolean;
}
