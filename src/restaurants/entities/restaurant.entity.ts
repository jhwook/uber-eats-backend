import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Field((type) => String)
  @IsString()
  @Column()
  @Length(5)
  name: string;

  @Field((type) => Boolean, { defaultValue: true })
  @IsBoolean()
  @IsOptional()
  @Column()
  isVegan?: boolean;

  @Field((type) => String)
  @IsString()
  @Column()
  address: string;

  @Field((type) => String)
  @IsString()
  @Column()
  ownersName: string;

  @Field((type) => String)
  @IsString()
  @Column()
  categoryName: string;
}
