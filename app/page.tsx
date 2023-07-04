import Header from "./components/Header/Header";
import RestaurantCard from "./components/RestaurantCard/RestaurantCard";
import { PrismaClient } from "@prisma/client";
import { RestaurantCardType } from "./types/restaurant";

const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true,
      reviews: true,
    },
  });
  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchRestaurants();
  return (
    <main>
      <Header />
      <div className="grid place-items-center min-h-screen">
        <div className="py-3 sm:px-10 mt-10 grid gap-8 sm:grid-cols-1 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-10">
          {restaurants.map((restaurant) => (
            <RestaurantCard restaurant={restaurant} key={restaurant.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
