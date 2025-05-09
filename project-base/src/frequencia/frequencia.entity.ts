import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Crianca } from '../crianca/crianca.entity';

@Entity('Frequencia')
export class Frequencia {
  @PrimaryGeneratedColumn()
  id_frequencia: number;

  @Column()
  id_crianca: number;

  @Column()
  atividade: string;

  @Column()
  data: Date;

  @Column()
  presenca: boolean;

  @ManyToOne(() => Crianca, (crianca) => crianca.frequencias)
  crianca: Crianca;
}