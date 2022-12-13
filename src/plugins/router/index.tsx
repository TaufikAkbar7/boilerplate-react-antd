import { useRoutes } from "react-router-dom";
import { AuthLoginLayout } from "~/features/auth/components";
import { AppLayout } from "~/features/app/components";
import useAuthRouter from "~/features/auth/router/auth-router";

const useRouter = () => {
  const auth = useAuthRouter();

  const routes = useRoutes([
    {
      path: "/",
      element: <AppLayout />
    },
    {
      path: "auth",
      element: <AuthLoginLayout />,
      children: [...auth]
    },
    { path: "*", element: <span>not found</span> }
  ]);

  return routes;
};

export { useRouter };
