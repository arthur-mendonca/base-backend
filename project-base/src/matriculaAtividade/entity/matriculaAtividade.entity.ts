import { MatriculaAtividade, StatusMatricula } from "@prisma/client";

export class MatriculaAtividadeEntity implements MatriculaAtividade {
  id_matricula: bigint;
  id_pessoa: bigint;
  id_atividade: bigint;
  data_matricula: Date;
  status: StatusMatricula;
  observacoes: string | null;
}
