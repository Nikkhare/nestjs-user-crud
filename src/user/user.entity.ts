import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Address } from '../address/address.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Address, address => address.user)
  addresses: Address[];
}