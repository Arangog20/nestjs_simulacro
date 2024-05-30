import { Module } from '@nestjs/common';
import { BookshopService } from '../services/bookshop.service';
import { BookshopController } from '../controllers/bookshop.controller';

@Module({
  controllers: [BookshopController],
  providers: [BookshopService],
})
export class BookshopModule {}
