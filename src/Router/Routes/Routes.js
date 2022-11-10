import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../../LayOuts/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from '../../../src/Pages/Login/Login';
import Register from "../../Pages/Register/Register";
import AllServices from "../../Pages/Home/Services/AllServices/AllServices";

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
            path: "/services",
            element: <AllServices></AllServices>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "*",
            element: <ErrorPage></ErrorPage>
        },
      ]
    }
  ]);

  export default router;  