import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerCategory } from './customer_category.entity';
import { CustomerCategoryController } from './customer_category.controller';
import { CustomerCategoryService } from './customer_category.service';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerCategory])],
  controllers: [CustomerCategoryController],
  providers: [CustomerCategoryService],
})
export class CustomerCategoryModule {}