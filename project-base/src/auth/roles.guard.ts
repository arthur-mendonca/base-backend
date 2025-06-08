import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY, UserRole } from './roles.decorator';
// Guard que protege endpoints conforme os perfis permitidos
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Lê os perfis permitidos da metadata da rota
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    
    if (!requiredRoles) {
      return true;  // Se não há roles definidas, libera acess
    }

    // Obtém o usuário da requisição
    const { user } = context.switchToHttp().getRequest();
    
    if (!user || !user.ativo) { // Verifica se usuário existe e está ativo
      return false;
    }
    
    // Define a hierarquia de permissões da ONG
    const roleHierarchy = {
      [UserRole.ADMIN]: [UserRole.ADMIN],
      [UserRole.USUARIO]: [UserRole.USUARIO]
    };

    // Obtém as permissões do perfil do usuário
    const userPermissions = roleHierarchy[user.perfil] || [];
    
    // Verifica se o usuário tem pelo menos uma das roles requeridas
    return requiredRoles.some(role => userPermissions.includes(role as UserRole));
  }
}