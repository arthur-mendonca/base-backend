import { TipoUsuario, Usuario } from "@prisma/client";

export class UserEntity implements Usuario {
  id_usuario: number;
  nome: string;
  email: string;
  senha: string;
  perfil: TipoUsuario;

}
