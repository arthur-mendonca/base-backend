import { Voluntario } from "@prisma/client";

// Entidade alinhada ao model `Voluntario` do schema.prisma
export class VoluntarioEntity implements Voluntario {
  id_voluntario: bigint;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  disponibilidade: string;
  area_atuacao: string;
  respondeu_questionario: boolean;
  aceitou_termos: boolean;
}