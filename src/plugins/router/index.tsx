import { useRoutes } from "react-router-dom";
import AppLayout from "~/features/app/components/layouts/app-layout-components";
import useAuthRouter from "~/features/auth/router/auth-router";

const useRouter = () => {
  const auth = useAuthRouter();

  const routes = useRoutes([
    {
      path: "auth",
      element: <AppLayout />,
      children: [...auth]
    },
    { path: "*", element: <span>not found</span> }
  ]);

  return routes;
};

export { useRouter };
