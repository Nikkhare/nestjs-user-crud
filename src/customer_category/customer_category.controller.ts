import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CustomerCategoryService } from './customer_category.service';
import { CustomerCategory } from './customer_category.entity';

@Controller('customer')
export class CustomerCategoryController {
  constructor(private readonly customerCategoryService: CustomerCategoryService) {}

  @Get()
  async findAll(): Promise<CustomerCategory[]> {
    const customer = await this.customerCategoryService.findAll();
    return customer;
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<CustomerCategory> {
    const customer = await this.customerCategoryService.findOne(id);
    return customer;
  }

  @Post()
  async create(@Body() customerCategory: CustomerCategory): Promise<CustomerCategory> {
    const customer = await this.customerCategoryService.create(customerCategory);
    return customer;
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() customerCategory: CustomerCategory,
  ): Promise<CustomerCategory> {
    const customer = await this.customerCategoryService.update(id, customerCategory);
    return customer;
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.customerCategoryService.remove(id);
  }
}