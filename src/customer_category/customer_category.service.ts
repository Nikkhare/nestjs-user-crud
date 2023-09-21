import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerCategory } from './customer_category.entity';

@Injectable()
export class CustomerCategoryService {
  constructor(
    @InjectRepository(CustomerCategory)
    private readonly customerCategoryRepository: Repository<CustomerCategory>,
  ) {}

  async findAll(): Promise<CustomerCategory[]> {
    const customerCategories: CustomerCategory[] = await this.customerCategoryRepository.find();
    return customerCategories;
  }
  async findOne(id: number): Promise<CustomerCategory> {
    const category = await  this.customerCategoryRepository.findOneOrFail({where:{id}});
    return category ;
  }    
  async create(customerCategories: CustomerCategory): Promise<CustomerCategory> {
    const category = await this.customerCategoryRepository.save(customerCategories);
    return category;
  }

  async update(
    id: number,
    customerCategory: CustomerCategory,
  ): Promise<CustomerCategory> {
    await this.customerCategoryRepository.update(id, customerCategory);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.customerCategoryRepository.delete(id);
  }
}