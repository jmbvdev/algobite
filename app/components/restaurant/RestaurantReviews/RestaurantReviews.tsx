import { Review } from "@prisma/client";
import React from "react";
import ReviewCard from "./ReviewCard";

const RestaurantReviews = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div>
      {reviews.length > 0 && (
        <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
          What
          {reviews.length === 1 ? " one person says" : " people are saying"}
        </h1>
      )}
      <div>
        {reviews.map((review) => (
          <ReviewCard review={review} reviews={reviews} key={review.id} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantReviews;
