import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookshopController } from '../controllers/bookshop.controller';
import { Book } from '../entities/book.entity';
import { BookshopService } from '../services/bookshop.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  exports: [BookshopService],
  controllers: [BookshopController],
  providers: [BookshopService],
})
export class BookshopModule {}
