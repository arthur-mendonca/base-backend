import { Voluntario } from "@prisma/client";

export class VoluntarioEntity implements Voluntario {
  id_voluntario: bigint;
  nome: string;
  cpf: string;
  rg: string;
  endereco: string;
  email: string;
  telefone: string;
  disponibilidade: string;
  area_atuacao: string;
  tem_antecedentes: boolean;
  url_comprovante: string | null;
  respondeu_questionario: boolean;
  aceitou_termos: boolean;
  data_cadastro: Date;
}
