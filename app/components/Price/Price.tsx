import { PRICE } from "@prisma/client";
import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";

const Price = ({ price }: { price: PRICE }) => {
  const renderPrice = () => {
    if (price === PRICE.CHEAP) {
      return (
        <>
          <div className="text-gray-400 mt-1">
            <BsCurrencyDollar />
          </div>
          <div className="text-gray-400 mt-1">
            <BsCurrencyDollar />
          </div>
        </>
      );
    } else if (price === PRICE.REGULAR) {
      return (
        <div className="mt-1 text-green-900 flex">
          <BsCurrencyDollar />
          <BsCurrencyDollar />
          <div className="text-gray-400 flex">
            <BsCurrencyDollar />
            <BsCurrencyDollar />
          </div>
        </div>
      );
    } else {
      return (
        <div className="mt-1 text-green-900 flex">
          <BsCurrencyDollar />
          <BsCurrencyDollar />
          <BsCurrencyDollar />
          <BsCurrencyDollar />
        </div>
      );
    }
  };
  return <div className="flex mr-3">{renderPrice()}</div>;
};

export default Price;
