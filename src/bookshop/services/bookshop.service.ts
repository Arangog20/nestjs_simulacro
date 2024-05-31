import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Book } from '../entities/book.entity';

@Injectable()
export class BookshopService {
  constructor(@InjectRepository(Book) private bookRepo: Repository<Book>) {}
  create() {
    return 'This action adds a new bookshop';
  }

  findAll() {
    return this.bookRepo.find();
  }

  findOne(id: number) {
    const book = this.bookRepo.findOne({ where: { id } });
    if (!book) {
      throw new NotFoundException(`Book #${id} not found`);
    }
    return book;
  }

  update(id: number) {
    return `This action updates a #${id} bookshop`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookshop`;
  }
}
