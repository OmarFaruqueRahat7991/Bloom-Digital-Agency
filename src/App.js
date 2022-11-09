import {
  RouterProvider
} from "react-router-dom";
import router from "./Router/Routes/Routes";

function App() {

  
  
  return (
    <div data-theme="aqua" className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
