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
            path: "/services/:id",
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
            element: <ServiceDetailCard></ServiceDetailCard>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/checkout/:id",
            element: <CheckOut></CheckOut>
        },
        {
            path: "/review/:id",
            element: <ReviewPage></ReviewPage>
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