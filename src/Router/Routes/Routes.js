import {
    createBrowserRouter,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/house",
      element: <div>Hello world from home</div>
    }
  ]);

  export default router;  