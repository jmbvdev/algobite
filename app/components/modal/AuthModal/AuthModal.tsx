"use client";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import AuthModalInputs from "../AuthModalInputs/AuthModalInputs";
import useAuth from "@/hooks/useAuth";

interface AuthHook {
  signin: ({ email, password }: { email: string; password: string }) => Promise<void>;
  signup: () => Promise<void>;
}


const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ isSignIn }: { isSignIn: boolean }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { signin }: AuthHook = useAuth();

  const signButtonContent = (signIn: string, signUp: string) => {
    return isSignIn ? signIn : signUp;
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthInputs({
      ...authInputs,
      [e.target.name]: e.target.value,
    });
  };

  const [authInputs, setAuthInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    city: "",
  });

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (isSignIn) {
      if (authInputs.password && authInputs.email) {
        return setDisabled(false);
      }
    } else {
      if (
        authInputs.firstName &&
        authInputs.lastName &&
        authInputs.email &&
        authInputs.password &&
        authInputs.city &&
        authInputs.phone
      ) {
        return setDisabled(false);
      }
    }
    setDisabled(true);
  }, [authInputs]);

  const handleAuthClick = () => {
    if (isSignIn) {
      signin({ email: authInputs.email, password: authInputs.password });
    }
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className={`${signButtonContent(
          "bg-blue-400 text-white",
          ""
        )} border p-1 px-4 rounded mr-3`}
      >
        {signButtonContent("Sign in", "Sign up")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-2 h-auto">
            <div className="upppercase font-bold text-center pb-2 border-b mb-2">
              <p className="text-sm">
                {signButtonContent("Sign In", "Create Account")}
              </p>
            </div>
            <div className="m-auto">
              <h2 className="text-2xl font-light text-center">
                {signButtonContent(
                  "Login Into Your Account",
                  "Create Your Algobite Account"
                )}
              </h2>
              <AuthModalInputs
                inputs={authInputs}
                handleChangeInput={handleChangeInput}
                isSignIn={isSignIn}
              />
              <button
                className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400"
                disabled={disabled}
                onClick={handleAuthClick}
              >
                {signButtonContent("Sign In", "Create Account")}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
