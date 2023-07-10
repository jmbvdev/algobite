import { RestaurantCardType } from "@/app/types/restaurant";
import Link from "next/link";
import React from "react";
import Price from "../../Price/Price";
import { calculateReviews } from "@/utils/calculateReviews";
import Stars from "../../Stars/Stars";

const RestaurantCardSearch = ({
  restaurant,
}: {
  restaurant: RestaurantCardType;
}) => {
  const renderRating = () => {
    const rating = calculateReviews(restaurant.reviews);
    if (rating > 4) return "Awesome";
    else if (rating <= 4 && rating > 3) return "Good";
    else if (rating <= 3 && rating > 2) return "Average";
    else "";
  };
  return (
    <div className="border-b flex pb-5 flex-col sm:flex-row">
      <img
        src={restaurant.main_image}
        alt={restaurant.name}
        className="w-full sm:w-44 h-36 rounded"
        placeholder="blur"
      />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <Stars reviews={restaurant.reviews} />
          <p className="ml-2 text-sm">{renderRating()}</p>
        </div>
        <div className="mb-2 sm:mb-9">
          <div className="font-light flex text-reg">
            <Price price={restaurant.price} />
            <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
            <p className="mr-4 capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCardSearch;
