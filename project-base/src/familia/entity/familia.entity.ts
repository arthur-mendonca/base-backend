import { Familia } from "@prisma/client";
import { PessoaEntity } from "src/pessoa/entity/pessoa.entity";

export class FamiliaEntity implements Familia {
  id_familia: bigint;
  nome: string;
  numero_dependentes: number;
  id_responsavel: bigint;
  observacoes: string | null;
  data_cadastro: Date;
  elegivel_cesta_basica: boolean;

  pessoas: PessoaEntity[];
  criancas: PessoaEntity[];
}
