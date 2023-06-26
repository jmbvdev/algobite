import NavBar from "@/app/components/NavBar/NavBar";
import ReservationCard from "@/app/components/restaurant/ReservationCard/ReservationCard";
import RestaurantDescription from "@/app/components/restaurant/RestaurantDescription/RestaurantDescription";
import RestaurantHeader from "@/app/components/restaurant/RestaurantHeader/RestaurantHeader";
import RestaurantImages from "@/app/components/restaurant/RestaurantImages/RestaurantImages";
import RestaurantNavBar from "@/app/components/restaurant/RestaurantNavBar/RestaurantNavBar";
import RestaurantRating from "@/app/components/restaurant/RestaurantRating/RestaurantRating";
import RestaurantReviews from "@/app/components/restaurant/RestaurantReviews/RestaurantReviews";
import RestaurantTitle from "@/app/components/restaurant/RestaurantTitle/RestaurantTitle";
import React from "react";

const RestaurantDetail = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <RestaurantHeader />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
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
        </div>
      </main>
    </main>
  );
};

export default RestaurantDetail;
