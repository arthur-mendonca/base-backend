import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Voluntario')
export class Voluntario {
  @PrimaryGeneratedColumn()
  id_voluntario: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @Column()
  disponibilidade: string;

  @Column()
  area_atuacao: string;

  @Column()
  respondeu_questionario: boolean;

  @Column()
  aceitou_termos: boolean;
}
