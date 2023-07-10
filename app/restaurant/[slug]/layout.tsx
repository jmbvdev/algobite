import RestaurantHeader from "@/app/components/restaurant/RestaurantHeader/RestaurantHeader";
import React from "react";

const RestaurantLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
  return (
    <main>
      <RestaurantHeader name={params.slug} />
      <div className="flex m-auto md:w-2/3 w-11/12 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </main>
  );
};

export default RestaurantLayout;
