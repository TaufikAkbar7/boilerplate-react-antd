import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export const AppLayout = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-y-5">
      <h1 className="text-xl">Boilerplate React Typescript Vite Antd</h1>
      <Button type="primary" onClick={() => navigate("/auth/login")}>Go to login screen</Button>
    </div>
  );
};
