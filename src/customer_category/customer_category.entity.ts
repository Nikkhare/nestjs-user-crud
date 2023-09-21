import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CustomerCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}