import { AtividadeVoluntario } from "@prisma/client";

export class AtividadeVoluntarioEntity implements AtividadeVoluntario {
  id_atividade: bigint;
  id_voluntario: bigint;
  descricao: string;
  data_realizacao: Date;
  horas_trabalhadas: number;
  observacoes: string | null;
}
