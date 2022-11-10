import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../../LayOuts/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "*",
            element: <ErrorPage></ErrorPage>
        },
      ]
    }
  ]);

  export default router;  