import React from "react";
import { Outlet } from "react-router-dom";
import LoginImg from "~/assets/images/login.jpg";

export const AuthLoginLayout = () => {
  return (
    <section className="flex flex-row justify-center items-center gap-x-16 mt-5">
      <img src={LoginImg} alt="login image" width={600} height={600} />
      <div className="flex-flex-col justify-center items-center bg-red-500"><Outlet /></div>
    </section>
  );
};
