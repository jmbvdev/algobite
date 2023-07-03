import React from "react";

interface AuthProps {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    city: string;
  };
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignIn: boolean;
}

const AuthModalInputs = ({
  inputs,
  handleChangeInput,
  isSignIn,
}: AuthProps) => {
  return (
    <div>
      {isSignIn ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="First Name"
            name="firstName"
            value={inputs.firstName}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="Last Name"
            name="lastName"
            value={inputs.lastName}
            onChange={handleChangeInput}
          />
        </div>
      )}

      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-full"
          placeholder="Email"
          name="email"
          value={inputs.email}
          onChange={handleChangeInput}
        />
      </div>
      {isSignIn ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="Phone"
            name="phone"
            value={inputs.phone}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="City"
            name="city"
            value={inputs.city}
            onChange={handleChangeInput}
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-full"
          placeholder="Password"
          name="password"
          value={inputs.password}
          onChange={handleChangeInput}
        />
      </div>
    </div>
  );
};

export default AuthModalInputs;
