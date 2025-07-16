export interface Voluntario {
  id_voluntario: string;
  nome: string;
  cpf: string;
  rg: string;
  endereco: string;
  email: string;
  telefone: string;
  disponibilidade: string;
  area_atuacao: string;
  tem_antecedentes: boolean;
  url_comprovante: string;
  respondeu_questionario: boolean;
  aceitou_termos: boolean;
  data_cadastro: string;
  atividades_realizadas: any[];
}
