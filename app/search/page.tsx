import React from "react";
// import SearchHeader from "../components/search/SearchHeader/SearchHeader";
import SearchSideBar from "../components/search/SearchSideBar/SearchSideBar";
import RestaurantCardSearch from "../components/search/RestaurantCardSearch/RestaurantCardSearch";
import SearchBar from "../components/SearchBar/SearchBar";

const page = () => {
  return (
    <>
      <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
        <SearchBar />
      </div>

      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          <RestaurantCardSearch />
        </div>
      </div>
    </>
  );
};

export default page;
