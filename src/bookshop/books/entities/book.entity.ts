// eslint-disable-next-line prettier/prettier
import { Author } from "src/bookshop/author/entities/author.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
  /* este decorador sirve ṕara llaves primaria autogeneradas que vayan incrementando */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  title: string;

  @Column({ type: 'int' })
  year: number;

  @Column({ type: 'varchar', length: 255 })
  category: string;

  @Column('decimal')
  price: number;

  @Column({default: 1})
  stock: number;

  @ManyToOne(()=> Author, author=>author.books )
  @JoinColumn({name: 'authorId'})
  author: Author;
}
