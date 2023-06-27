import React from "react";
// import SearchHeader from "../components/search/SearchHeader/SearchHeader";
import SearchSideBar from "../components/search/SearchSideBar/SearchSideBar";
import RestaurantCardSearch from "../components/search/RestaurantCardSearch/RestaurantCardSearch";
import SearchBar from "../components/SearchBar/SearchBar";
import { PrismaClient, Restaurant } from "@prisma/client";
import { RestaurantCardType } from "../types/restaurant";

const prisma = new PrismaClient();

const fetchRestaurantsByCity = (
  city: string
): Promise<RestaurantCardType[]> => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };
  if (!city)
    return prisma.restaurant.findMany({
      select,
    });

  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLocaleLowerCase(),
        },
      },
    },
    select,
  });
};

const page = async ({ searchParams }: { searchParams: { city: string } }) => {
  const restaurants = await fetchRestaurantsByCity(searchParams.city);

  return (
    <>
      <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
        <SearchBar />
      </div>

      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          {restaurants.length ? (
            <>
              {restaurants.map((restaurant) => (
                <RestaurantCardSearch
                  restaurant={restaurant}
                  key={restaurant.id}
                />
              ))}
            </>
          ) : (
            <p>Sorry, there is not restaurants in this area</p>
          )}
        </div>
      </div>
    </>
  );
};

export default page;
