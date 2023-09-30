import Home from "../Component/Home/Home";
import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import Fund from "../Component/Fund/Fund";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/fund",
        element: <Fund />,
      },
    ],
  },
]);
