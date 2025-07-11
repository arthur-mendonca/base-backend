export interface User {
  id_usuario: number;
  nome: string;
  email: string;
  perfil: string;
  data_cadastro: string;
}

export interface UserUpdatePayload {
  nome?: string;
  email?: string;
  senha_atual?: string;
  nova_senha?: string;
}
