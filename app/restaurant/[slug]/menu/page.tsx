import NavBar from "@/app/components/NavBar/NavBar";
import MenuCardList from "@/app/components/menu/MenuCardList/MenuCardList";
import RestaurantHeader from "@/app/components/restaurant/RestaurantHeader/RestaurantHeader";
import RestaurantNavBar from "@/app/components/restaurant/RestaurantNavBar/RestaurantNavBar";
import React from "react";

const RestaurantMenu = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <RestaurantHeader />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            <RestaurantNavBar />
            <MenuCardList />
          </div>
        </div>
      </main>
    </main>
  );
};

export default RestaurantMenu;
