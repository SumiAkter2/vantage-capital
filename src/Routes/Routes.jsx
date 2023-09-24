// import { Root } from "postcss";
import Home from "../Component/Home/Home";
// import NotFound from "../Component/Home/NotFound";
import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage";
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
      
    ],
  },
]);
