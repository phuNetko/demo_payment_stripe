import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../components/Layouts/DefaultLayout";
const Home = lazy(() => import("../pages/Home/index"));
const Detail = lazy(() => import("../pages/Detail/index"));
const Payment = lazy(() => import("../pages/Payment/index"));
const routers = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  }
];

export const router = createBrowserRouter(routers);