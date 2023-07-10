import { RestaurantCardType } from "@/app/types/restaurant";
import Link from "next/link";
import React from "react";
import Price from "../Price/Price";
import Stars from "../Stars/Stars";

interface CardProps {
  restaurant: RestaurantCardType;
}

const RestaurantCard = ({ restaurant }: CardProps) => {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-2 transform-gpu">
      <Link href={`/restaurant/${restaurant.slug}`}>
        <img
          src={restaurant.main_image}
          alt={restaurant.name}
          className="w-full h-36"
          placeholder="blur"
        />
        <div className="flex flex-col gap-1 p-2 px-3">
          <h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>
          <div className="flex items-start">
            <Stars reviews={restaurant.reviews} />
            {restaurant.reviews?.length && (
              <span className="ml-2">
                {restaurant.reviews.length} review
                {restaurant.reviews.length === 1 ? "" : "s"}
              </span>
            )}
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className=" mr-3">{restaurant.cuisine.name}</p>
            <Price price={restaurant.price} />
            <p>{restaurant.location.name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
