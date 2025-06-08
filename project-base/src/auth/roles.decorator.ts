
import { SetMetadata } from '@nestjs/common';
// Decorador para associar roles/perfis às rotas
export const ROLES_KEY = 'roles'; // Chave usada para armazenar metadata
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);

// Enum para definir os perfis usados na aplicação
export enum UserRole {
  ADMIN = 'ADMIN',
  COORDENADOR = 'COORDENADOR', 
  VOLUNTARIO = 'VOLUNTARIO',
  RESPONSAVEL = "RESPONSAVEL",
}

// Exemplos de uso do decorador:
// @Roles(UserRole.ADMIN)
// @Roles(UserRole.ADMIN, UserRole.COORDENADOR)
// @Roles(UserRole.VOLUNTARIO)