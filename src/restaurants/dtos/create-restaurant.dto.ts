import { Restaurant } from './../entities/restaurant.entity';
import { ArgsType, Field, InputType, OmitType } from '@nestjs/graphql';

@InputType()
export class CreateRestaurantDto extends OmitType(Restaurant, ['id']) {}
