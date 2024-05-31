import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class CreateBookshopDto {
    @IsOptional()
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsOptional()
    @IsNumber()
    year: number;

    @IsString()
    @IsNotEmpty()
    category: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @IsOptional()
    stock: number;

    @IsOptional()
    @IsInt()
    authorId: number;

    
}
