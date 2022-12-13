import React from "react";
import { RouteObject } from "react-router-dom";

const Login = React.lazy(() => import("../../auth/ui/auth-login-ui"));

const useAuthRouter = (): RouteObject[] => {
  return [
    {
      path: "login",
      element: <Login />
    }
  ];
};

export default useAuthRouter;
