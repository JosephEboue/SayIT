import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import LoginPage from "./LoginPage";

const Login = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-[#1d9bf0] h-screen grid place-items-center">
      <img src="/favicon.ico" alt="SayIT logo" />
      </div>

      <div className="grid place-items-center">
        <LoginPage />
      </div>
    </div>
  );
};

export default Login;
