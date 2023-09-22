import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find({ relations: ['addresses'] });
  }

  // findOne(id: number): Promise<User> {
  //   return this.userRepository.findOne(id, { relations: ['addresses'] });
  // }

  async findOne(id: number): Promise<User> {
    return await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.addresses', 'address')
      .where('user.id = :id', { id })
      .getOne();
  }

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async update(id: number, user: User): Promise<User> {
    await this.userRepository.update(id, user);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
    return undefined;
  }
}