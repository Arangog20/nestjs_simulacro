import { PartialType } from '@nestjs/mapped-types';
import { CreateBookshopDto } from './create-bookshop.dto';

export class UpdateBookshopDto extends PartialType(CreateBookshopDto) {}
