import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BookshopService } from '../services/bookshop.service';
import { CreateBookshopDto } from '../dto/create-bookshop.dto';
import { title } from 'process';
import { UpdateBookshopDto } from '../dto/update-bookshop.dto';

@Controller('bookshop')
export class BookshopController {
  constructor(private readonly bookshopService: BookshopService) {}

  @Post()
  create(@Body()data:CreateBookshopDto) {
    return this.bookshopService.create(data);    
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.bookshopService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: UpdateBookshopDto) {
    return this.bookshopService.update(id, data);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookshopService.remove(+id);
  }
}
