import { Usuario } from "generated/prisma";

export class UserEntity implements Usuario {
  id_usuario: number;
  nome: string;
  email: string;
  senha: string;
  perfil: "admin" | "usuario";
}
