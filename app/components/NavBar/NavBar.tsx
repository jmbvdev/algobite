import Link from "next/link";
import React from "react";
import AuthModal from "../modal/AuthModal/AuthModal";

const NavBar = () => {
  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        AlgoBite
      </Link>
      <div>
        <div className="flex">
         
          <AuthModal isSignIn/>
          <AuthModal isSignIn={false}/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
