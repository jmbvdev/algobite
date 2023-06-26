import MenuCardList from "@/app/components/menu/MenuCardList/MenuCardList";
import RestaurantNavBar from "@/app/components/restaurant/RestaurantNavBar/RestaurantNavBar";
import React from "react";

const RestaurantMenu = () => {
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavBar />
      <MenuCardList />
    </div>
  );
};

export default RestaurantMenu;
