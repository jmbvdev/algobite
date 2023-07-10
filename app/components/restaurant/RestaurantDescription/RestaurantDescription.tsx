import React from "react";

const RestaurantDescription = ({ description }: { description: string }) => {
  return (
    <div className="mt-4 w-full">
      <p className="text-lg font-light">{description}</p>
    </div>
  );
};

export default RestaurantDescription;
