import { Voluntario } from "@prisma/client";

export class VoluntarioEntity implements Voluntario {
  id_voluntario: number;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  disponibilidade: string;
  area_atuacao: string;
  respondeu_questionario: boolean;
  aceitou_termos: boolean;
}
