// eslint-disable-next-line prettier/prettier
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
