import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class CreateBookDto {
  @Expose()
  @IsNotEmpty()
  @IsString()
  title!: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  author!: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  genre!: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  isbn!: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  description!: string;
}