import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookshopService } from '../services/bookshop.service';
import { UpdateBookshopDto } from '../dto/update-bookshop.dto';

@Controller('bookshop')
export class BookshopController {
  constructor(private readonly bookshopService: BookshopService) {}

  @Post()
  create() {
    return this.bookshopService.create();
  }

  @Get()
  findAll() {
    return this.bookshopService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.bookshopService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBookshopDto: UpdateBookshopDto,
  ) {
    return this.bookshopService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookshopService.remove(+id);
  }
}
