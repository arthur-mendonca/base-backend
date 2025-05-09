import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Responsavel } from '../responsavel/responsavel.entity';
import { Frequencia } from '../frequencia/frequencia.entity';

@Entity('Crianca')
export class Crianca {
  @PrimaryGeneratedColumn()
  id_crianca: number;

  @Column()
  id_responsavel: number;

  @Column()
  nome: string;

  @Column()
  data_nascimento: Date;

  @Column()
  rg: string;

  @Column({ unique: true })
  cpf: string;

  @ManyToOne(() => Responsavel, (responsavel) => responsavel.criancas)
  responsavel: Responsavel;

  @OneToMany(() => Frequencia, (frequencia) => frequencia.crianca)
  frequencias: Frequencia[];
}