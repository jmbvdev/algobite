import ReservationCard from "@/app/components/restaurant/ReservationCard/ReservationCard";
import RestaurantDescription from "@/app/components/restaurant/RestaurantDescription/RestaurantDescription";
import RestaurantImages from "@/app/components/restaurant/RestaurantImages/RestaurantImages";
import RestaurantNavBar from "@/app/components/restaurant/RestaurantNavBar/RestaurantNavBar";
import RestaurantRating from "@/app/components/restaurant/RestaurantRating/RestaurantRating";
import RestaurantReviews from "@/app/components/restaurant/RestaurantReviews/RestaurantReviews";
import RestaurantTitle from "@/app/components/restaurant/RestaurantTitle/RestaurantTitle";
import { PrismaClient, Review } from "@prisma/client";
import { notFound } from "next/navigation";
import React from "react";

const prisma = new PrismaClient();

interface Restaurant {
  id: number;
  name: string;
  description: string;
  images: string[];
  slug: string;
  reviews:Review[];
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
      reviews:true
    },
  });
  if (!restaurant) {
    notFound()
  }
  return restaurant;
};

const RestaurantDetail = async ({ params }: { params: { slug: string } }) => {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={restaurant.slug} />
        <RestaurantTitle title={restaurant.name}/>
        <RestaurantRating reviews={restaurant.reviews}/>
        <RestaurantDescription description={restaurant.description} />
        <RestaurantImages images={restaurant.images}/>
        <RestaurantReviews reviews={restaurant.reviews} />
      </div>
    </>
  );
};

export default RestaurantDetail;
