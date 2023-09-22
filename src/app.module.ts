import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Address } from './address/address.entity';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CustomerCategoryModule } from './customer_category/customer_category.module';
import { CustomerCategory } from './customer_category/customer_category.entity';
// import { BookModule } from './book/book.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
      entities: [User, CustomerCategory, Address],
      synchronize: true,
    }),
    inject: [ConfigService],
  }),
  TypeOrmModule.forFeature([User]),
  CustomerCategoryModule,
  // BookModule,
  AddressModule
  ],
  providers: [UserService],
  controllers: [UserController],
})
   
export class AppModule {}