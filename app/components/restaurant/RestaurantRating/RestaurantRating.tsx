import { calculateReviews } from "@/utils/calculateReviews";
import { Review } from "@prisma/client";
import React from "react";
import Stars from "../../Stars/Stars";

const RestaurantRating = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <Stars reviews={reviews} />
        {reviews.length > 0 && (
          <p className="text-reg ml-3">
            {calculateReviews(reviews).toFixed(1)}
          </p>
        )}
      </div>
      <div>
        {reviews.length > 0 && (
          <p className="text-reg ml-4">
            {reviews.length} Review{reviews.length === 1 ? "" : "s"}
          </p>
        )}
      </div>
    </div>
  );
};

export default RestaurantRating;
