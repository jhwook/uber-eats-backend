import { RestaurantService } from './restaurants.service';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Resolver((of) => Restaurant)
export class RestaurantsResolver {
  constructor(private readonly restaurnatService: RestaurantService) {}
  @Query((returns) => [Restaurant])
  restuarants(): Promise<Restaurant[]> {
    return;
  }

  @Mutation((returns) => Boolean)
  createRestaurant(@Args() createRestaurantDto: CreateRestaurantDto): boolean {
    console.log(createRestaurantDto);

    return true;
  }
}
