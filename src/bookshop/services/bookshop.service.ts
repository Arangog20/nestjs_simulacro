import { Injectable } from '@nestjs/common';
import { CreateBookshopDto } from '../dto/create-bookshop.dto';
import { UpdateBookshopDto } from '../dto/update-bookshop.dto';

@Injectable()
export class BookshopService {
  create(createBookshopDto: CreateBookshopDto) {
    return 'This action adds a new bookshop';
  }

  findAll() {
    return `This action returns all bookshop`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bookshop`;
  }

  update(id: number, updateBookshopDto: UpdateBookshopDto) {
    return `This action updates a #${id} bookshop`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookshop`;
  }
}
