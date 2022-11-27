import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../../LayOuts/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from '../../../src/Pages/Login/Login';
import Register from "../../Pages/Register/Register";
import AllServices from "../../Pages/Home/Services/AllServices/AllServices";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import ReviewPage from "../../Pages/ReviewPage/ReviewPage";
import ServiceDetailCard from "../../Pages/Home/Services/ServiceCard/ServiceDetailCard";
import Blogs from "../../Pages/Blogs/Blogs";
import AddAServiceCard from "../../Pages/Home/Services/AllServices/AddAService";
import AddAService from "../../Pages/Home/Services/AllServices/AddAService";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
            element: <PrivateRoute><AllServices></AllServices></PrivateRoute>
        },
        {
            path: "/services/:id",
            loader: ({params}) => fetch(`https://my-eleventh-assignment-server.vercel.app/services/${params.id}`),
            element: <PrivateRoute><ServiceDetailCard></ServiceDetailCard></PrivateRoute>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/checkout/:id",
            loader: ({params}) => fetch(`https://my-eleventh-assignment-server.vercel.app/checkout/${params.id}`),
            element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
        },
        {
            path: "/review/:id",
            loader: ({params}) => fetch(`https://my-eleventh-assignment-server.vercel.app/review/${params.id}`),
            element: <PrivateRoute><ReviewPage></ReviewPage></PrivateRoute>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/blogs",
            element: <Blogs></Blogs>
        },
        {
          path: "/add",
          element: <PrivateRoute><AddAService></AddAService></PrivateRoute>
      },
        {
            path: "*",
            element: <ErrorPage></ErrorPage>
        },
      ]
    }
  ]);

  export default router;  