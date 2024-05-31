import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Book } from './bookshop/books/entities/book.entity';
import { Author } from './bookshop/author/entities/author.entity';
import { AuthorController } from './bookshop/author/controller/author.controller';
import { BookshopController } from './bookshop/books/controllers/bookshop.controller';
import { BookshopService } from './bookshop/books/services/bookshop.service';
import { AuthorService } from './bookshop/author/service/author.service';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.PORT_DB,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      entities: [Book, Author],
      extra: {
        ssl: true,
      },
    }),
    TypeOrmModule.forFeature([Book, Author])
  ],
  controllers: [AuthorController, BookshopController],
  providers: [AuthorService, BookshopService],
})
export class AppModule {}
