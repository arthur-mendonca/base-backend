// interfaces/auth.interfaces.ts
export interface User {
  id_usuario: number;
  email: string;
  perfil: UserRole;
  nome?: string;
  telefone?: string;
  ativo: boolean;
  data_cadastro: Date;
  senha?: string;
}

export interface JwtPayload {
  sub: number;  // ID do usuário, usado como subject no token
  email: string;
  perfil: UserRole; // Perfil do usuário no token
}

export interface LoginResponse {
  accessToken: string;  // Token JWT de acesso
  user: { // Dados do usuário retornados no login
    id: number;
    email: string;
    perfil: UserRole;
    nome?: string;
  };
}
// Interface para uso das informações do usuário na requisição HTTP
export interface RequestWithUser extends Request {
  user: {
    id_usuario: number;
    email: string;
    perfil: UserRole; 
    nome?: string;
    ativo: boolean;
    data_cadastro: Date;
  };
}

// Enum com os perfis de usuário da aplicação
export enum UserRole {
  ADMIN = 'ADMIN',
  COORDENADOR = 'COORDENADOR',
  VOLUNTARIO = 'VOLUNTARIO',
  RESPONSAVEL = 'RESPONSAVEL',
  USUARIO = "USUARIO",
}
// Função para validar se uma string é um valor válido do enum UserRole
export function isValidUserRole(role: string): role is UserRole {
  return Object.values(UserRole).includes(role as UserRole);
}