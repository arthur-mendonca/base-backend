import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Parceiro')
export class Parceiro {
  @PrimaryGeneratedColumn()
  id_parceiro: number;

  @Column()
  nome: string;

  @Column()
  tipo: string; // "parceiro" ou "patrocinador"

  @Column()
  email: string;

  @Column()
  telefone: string;

  @Column()
  contribuicao: string; // "financeira", "material", etc.
}