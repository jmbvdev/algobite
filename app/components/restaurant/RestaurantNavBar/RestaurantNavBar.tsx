import Link from "next/link";
import React from "react";

const RestaurantNavBar = () => {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href="/restaurant/dgjk" className="mr-7">
        Overview
      </Link>
      <Link href="/restaurant/dgjk/menu" className="mr-7">
        Menu
      </Link>
    </nav>
  );
};

export default RestaurantNavBar;
