import ReserveForm from "@/app/components/reserve/ReserveForm/ReserveForm";
import ReserveHeader from "@/app/components/reserve/ReserveHeader/ReserveHeader";
import React from "react";

const Reserve = () => {
  return (
    <>
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          <ReserveHeader />
          <ReserveForm />
        </div>
      </div>
    </>
  );
};

export default Reserve;
