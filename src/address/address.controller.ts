import { Controller, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Address } from './address.entity';
import { AddressService } from './address.service';

@Controller('addresses')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  async create(@Body() address: Address): Promise<Address> {
    return await this.addressService.create(address);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() address: Address): Promise<Address> {
    return await this.addressService.update(id, address);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return await this.addressService.remove(id);
  }
}
