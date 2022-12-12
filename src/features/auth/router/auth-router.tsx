import React from "react";
import { RouteObject } from "react-router-dom";

const App = React.lazy(() => import("../../app/ui/App"));

const useAuthRouter = (): RouteObject[] => {
  return [
    {
      path: "login",
      element: (
        <App />
      )
    }
  ];
};

export default useAuthRouter;
