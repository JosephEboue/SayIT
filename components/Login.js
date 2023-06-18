import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-[#1d9bf0] h-screen grid place-items-center">
      <img src="/favicon.ico" alt="SayIT logo" />
      </div>

      <div className="grid place-items-center">
        <div
          className="flex gap-4 bg-[#fff] p-4 px-6 items-center rounded-[6px] cursor-pointer text-black"
          onClick={() => signIn("google")}
        >
          <FcGoogle className="text-[30px]" />
          SignIn with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
