import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookshopService } from '../services/bookshop.service';
import { CreateBookshopDto } from '../dto/create-bookshop.dto';
import { UpdateBookshopDto } from '../dto/update-bookshop.dto';

@Controller('bookshop')
export class BookshopController {
  constructor(private readonly bookshopService: BookshopService) {}

  @Post()
  create(@Body() createBookshopDto: CreateBookshopDto) {
    return this.bookshopService.create(createBookshopDto);
  }

  @Get()
  findAll() {
    return this.bookshopService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookshopService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookshopDto: UpdateBookshopDto) {
    return this.bookshopService.update(+id, updateBookshopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookshopService.remove(+id);
  }
}
