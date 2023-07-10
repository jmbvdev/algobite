import React from "react";
import SearchSideBar from "../components/search/SearchSideBar/SearchSideBar";
import RestaurantCardSearch from "../components/search/RestaurantCardSearch/RestaurantCardSearch";
import SearchBar from "../components/SearchBar/SearchBar";
import { PRICE, PrismaClient, Restaurant } from "@prisma/client";
import DrawerMenu from "../components/Drawer/DrawerMenu";

const prisma = new PrismaClient();

interface Search_Params {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

const fetchRestaurantsByCity = (searchParams: Search_Params) => {
  const where: any = {};
  if (searchParams.city) {
    const location = {
      name: {
        equals: searchParams.city.toLocaleLowerCase(),
      },
    };
    where.location = location;
  }

  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLocaleLowerCase(),
      },
    };
    where.cuisine = cuisine;
  }

  if (searchParams.price) {
    const price = {
      equals: searchParams.price,
    };
    where.price = price;
  }

  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
    reviews: true,
  };

  return prisma.restaurant.findMany({
    where,
    select,
  });
};

const fetchLocations = async () => {
  return prisma.location.findMany();
};

const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
};

const page = async ({
  searchParams,
}: {
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}) => {
  const restaurants = await fetchRestaurantsByCity(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-4 pb-8">
        <SearchBar />
      </div>

      <div className="flex py-4 m-auto md:w-2/3 justify-center md:justify-between items-start">
        <div className="hidden md:block">
          <SearchSideBar
            cuisines={cuisines}
            locations={locations}
            searchParams={searchParams}
          />
        </div>
        <DrawerMenu
          cuisines={cuisines}
          locations={locations}
          searchParams={searchParams}
        />
        {restaurants.length ? (
          <div className="w-4/6 flex flex-col">
            {restaurants.map((restaurant) => (
              <RestaurantCardSearch
                restaurant={restaurant}
                key={restaurant.id}
              />
            ))}
          </div>
        ) : (
          <div className="w-4/6">
            <span>Sorry, there is not restaurants in this area</span>
          </div>
        )}
      </div>
    </>
  );
};

export default page;
