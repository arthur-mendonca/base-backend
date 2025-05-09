import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Responsavel } from '../responsavel/responsavel.entity';

@Entity('CestaBasica')
export class CestaBasica {
  @PrimaryGeneratedColumn()
  id_cesta: number;

  @Column()
  id_responsavel: number;

  @Column()
  data_entrega: Date;

  @Column()
  quantidade: number;

  @Column()
  observacoes: string;

  @ManyToOne(() => Responsavel, (responsavel) => responsavel.cestasBasicas)
  responsavel: Responsavel;
}