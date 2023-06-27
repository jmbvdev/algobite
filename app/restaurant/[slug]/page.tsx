import ReservationCard from "@/app/components/restaurant/ReservationCard/ReservationCard";
import RestaurantDescription from "@/app/components/restaurant/RestaurantDescription/RestaurantDescription";
import RestaurantImages from "@/app/components/restaurant/RestaurantImages/RestaurantImages";
import RestaurantNavBar from "@/app/components/restaurant/RestaurantNavBar/RestaurantNavBar";
import RestaurantRating from "@/app/components/restaurant/RestaurantRating/RestaurantRating";
import RestaurantReviews from "@/app/components/restaurant/RestaurantReviews/RestaurantReviews";
import RestaurantTitle from "@/app/components/restaurant/RestaurantTitle/RestaurantTitle";
import { PrismaClient } from "@prisma/client";
import React from "react";

const prisma = new PrismaClient();

interface Restaurant {
  id: number;
  name: string;
  description: string;
  images: string[];
  slug: string;
}

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      slug: true,
    },
  });
  if (!restaurant) {
    throw new Error();
  }
  return restaurant;
};

const RestaurantDetail = async ({ params }: { params: { slug: string } }) => {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar />
        <RestaurantTitle />
        <RestaurantRating />
        <RestaurantDescription />
        <RestaurantImages />
        <RestaurantReviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
};

export default RestaurantDetail;
