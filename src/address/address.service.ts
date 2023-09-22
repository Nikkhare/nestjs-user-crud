import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}

  async create(address: Address): Promise<Address> {
    return await this.addressRepository.save(address);
  }

  async update(id: number, address: Address): Promise<Address> {
    return await this.addressRepository.update(id, address).then(() => this.findOne(id));
  }

  async remove(id: number): Promise<void> {
    return await this.addressRepository.delete(id).then(() => undefined);
  }

  async findOne(id: number): Promise<Address> {
    return await this.addressRepository.findOne({ where: { id } });
  }
}