import { Doacao, TipoDoacao } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export class DoacaoEntity implements Doacao {
  id_doacao: bigint;
  id_parceiro: bigint | null;
  tipo: TipoDoacao;
  valor: Decimal | null;
  descricao: string;
  data_recebimento: Date;
  comprovante_url: string | null;
  is_anonima: boolean;
}

//  id_doacao        BigInt     @id
//   id_parceiro      BigInt? // Null se for anônima
//   tipo             TipoDoacao // Monetária ou Material
//   valor            Decimal? // Se for monetária
//   descricao        String
//   data_recebimento DateTime   @default(now())
//   comprovante_url  String? // URL do comprovante (ex: comprovante PIX)
//   is_anonima       Boolean    @default(false)
