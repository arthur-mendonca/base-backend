import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Crianca } from '../crianca/crianca.entity';
import { CestaBasica } from '../cesta-basica/cesta-basica.entity';

@Entity('Responsavel')
export class Responsavel {
  @PrimaryGeneratedColumn()
  id_responsavel: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  rg: string;

  @Column()
  parentesco_com_crianca: string;

  @Column()
  telefone: string;

  @Column()
  email: string;

  @Column()
  ocupacao: string;

  @Column()
  endereco: string;

  @OneToMany(() => Crianca, (crianca) => crianca.responsavel)
  criancas: Crianca[];

  @OneToMany(() => CestaBasica, (cestaBasica) => cestaBasica.responsavel)
  cestasBasicas: CestaBasica[];
}