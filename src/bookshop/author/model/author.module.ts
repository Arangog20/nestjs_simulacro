import { Module } from '@nestjs/common';
import { AuthorService } from '../service/author.service';
import { AuthorController } from '../controller/author.controller';

@Module({
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}
