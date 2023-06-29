"use client";

import Image from "next/image";
import errorImage from "../../public/icons/error.png";

const Error = ({ error }: { error: Error }) => {
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
      <Image src={errorImage} alt="error" className="w-56 mb-8" />
      <div className="bg-white p-9 py-14 shadow rounded">
               <h3 className="text-3xl font-fold">Something goes wrong</h3>
        <p>{error.message}</p>
      </div>
    </div>
  );
};

export default Error;
