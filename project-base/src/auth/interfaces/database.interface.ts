
import { User, UserRole } from "./auth.interface";
// Interface que representa o usuário retornado do banco de dados
export interface DatabaseUser {
  id_usuario: number;
  nome?: string;
  email: string;
   // Perfil armazenado no banco em letras minúsculas
  perfil: 'admin' | 'usuario' | 'coordenador' | 'voluntario' | 'responsavel'; 
  ativo: boolean | any; 
  senha: string;
  telefone?: string;
  data_cadastro?: Date;
}

// Função para normalizar o usuário do banco para o formato da aplicação omitindo a senha
export function convertDatabaseUserToAppUser(dbUser: DatabaseUser): Omit<User, 'senha'> {
  let normalizedPerfil: UserRole;
  switch (dbUser.perfil?.toLowerCase()) {
    case 'admin':
      normalizedPerfil = UserRole.ADMIN;
      break;
    case 'coordenador':
      normalizedPerfil = UserRole.COORDENADOR;
      break;
    case 'voluntario':
      normalizedPerfil = UserRole.VOLUNTARIO;
      break;
    case 'responsavel':
      normalizedPerfil = UserRole.RESPONSAVEL;
      break;
    case 'usuario':
    default:
      normalizedPerfil = UserRole.USUARIO;
  }
 // Retorna o usuário normalizado
  return {
    id_usuario: dbUser.id_usuario,
    email: dbUser.email,
    perfil: normalizedPerfil,
    nome: dbUser.nome,
    telefone: dbUser.telefone,
    ativo: Boolean(dbUser.ativo),
    data_cadastro: dbUser.data_cadastro || new Date(),
  };
}