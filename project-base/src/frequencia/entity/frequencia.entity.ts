import { Frequencia } from "@prisma/client";

export class FrequenciaEntity implements Frequencia {
  id_frequencia: bigint;
  id_pessoa: bigint;
  id_atividade: bigint;
  data: Date;
  presenca: boolean;
  justificativa: string | null;
}
