"use client";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import headerbg from "../../../public/background/restaurantbg.webp";

const Header = () => {
  return (
    <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
      <div className="text-center mt-10">
        <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold mb-2">
          Explore Vibrant Cuisine Across Spain
        </h1>
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
