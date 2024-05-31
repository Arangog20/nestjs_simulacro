import { Module } from '@nestjs/common';
import { AppService } from './bookshop/services/app.service';
import { BookshopModule } from './bookshop/modules/bookshop.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './bookshop/entities/book.entity';

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
      entities: [Book],
      extra: {
        ssl: true,
      },
    }),

    BookshopModule,
  ],
  controllers: [],
  providers: [AppService],
  exports: [TypeOrmModule],
})
export class AppModule {}
