"use client";
import Link from "next/link";
import React from "react";
import AuthModal from "../modal/AuthModal/AuthModal";
import { useContext } from "react";
import { AuthenticationContext } from "@/app/context/AuthContext";
import logo from "../../../public/logo/logo.webp";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";

const NavBar = () => {
  const { data, loading } = useContext(AuthenticationContext);
  const { signout } = useAuth();

  return (
    <nav className="py-2 px-2 sm:px-5 flex justify-between bg-white items-center">
      <Link href="/">
        <Image src={logo} height={32} alt="logo" placeholder="blur" />
      </Link>
      <div>
        {loading ? null : (
          <div className="flex">
            {data ? (
              <button
                className="bg-blue-400 text-white border p-1 px-4 rounded"
                onClick={signout}
              >
                Sign Out
              </button>
            ) : (
              <>
                <AuthModal isSignIn />
                <AuthModal isSignIn={false} />
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
