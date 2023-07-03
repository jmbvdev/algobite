"use client";
import Link from "next/link";
import React from "react";
import AuthModal from "../modal/AuthModal/AuthModal";
import { useContext } from "react";
import { AuthenticationContext } from "@/app/context/AuthContext";
import useAuth from "@/hooks/useAuth";

const NavBar = () => {
  const { data, loading } = useContext(AuthenticationContext);
  const { signout } = useAuth();

  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        AlgoBite
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
