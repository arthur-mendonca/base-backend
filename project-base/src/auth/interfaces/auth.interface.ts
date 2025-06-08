// interfaces/auth.interfaces.ts
// interfaces/auth.interfaces.ts
export interface User {
  id_usuario: number; // ID do usuário
  nome: string;       // Nome do usuário
  email: string;      // Email do usuário (único)
  senha?: string;     // Senha do usuário (opcional, não deve ser exposta)
  perfil: UserRole;   // Perfil do usuário (admin ou usuario)
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
    nome?: string;
    email: string;
    perfil: UserRole;
  };
}
// Interface para uso das informações do usuário na requisição HTTP
export interface RequestWithUser extends Request {
  user: {
    id_usuario: number;
    nome?: string;
    email: string;
    perfil: UserRole; 
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