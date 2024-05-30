import { Module } from '@nestjs/common';
import { AppService } from './bookshop/services/app.service';
import { BookshopModule } from './bookshop/modules/bookshop.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      entities: [Book]
    }),
    
    BookshopModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
