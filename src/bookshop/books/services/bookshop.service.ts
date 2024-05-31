import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../entities/book.entity';
import { CreateBookshopDto } from '../dto/create-bookshop.dto';
import { UpdateBookshopDto } from '../dto/update-bookshop.dto';




@Injectable()
export class BookshopService {
  constructor(@InjectRepository(Book) private bookRepo: Repository<Book>) {}
  
  async create(data:CreateBookshopDto) {
    // const newBook = new Book();
    // newBook.id = data.id;
    // newBook.title = data.title;
    // newBook.year = data.year;
    // newBook.category = data.category;
    // newBook.price = data.price;
    const existingBook = await this.bookRepo.findOneBy({title: data.title})
    if (existingBook){
      throw new BadRequestException('The book already exists')
    }
    const newBook = this.bookRepo.create(data);
    return this.bookRepo.save(newBook);
  }


  findOne(id: number) {
    const book = this.bookRepo.findOne({ where: { id } });
    if (!book) {
      throw new NotFoundException(`Book #${id} not found`);
    }
    return book;
  }

  async update(id: number, changes: UpdateBookshopDto) {
    const book = await this.bookRepo.findOne({ where: { id } });
    this.bookRepo.merge(book, changes);
    return this.bookRepo.save(book);
  }

  remove(id: number) {
    const bookDelete = this.bookRepo.findOne({ where: { id}});
    if (!bookDelete){
      throw new BadRequestException(`Book #${id} not exist`);
    }else (bookDelete)=>{
      this.bookRepo.delete(bookDelete);
    }
    return `This action removes a #${id} bookshop`;
  }
}
