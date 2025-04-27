
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum TipoUsuario {
  ADMIN = 'admin',
  USUARIO = 'usuario',
}

@Entity('Usuario')
export class User {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column({
    type: 'enum',
    enum: TipoUsuario,
  })
  perfil: TipoUsuario;
}
