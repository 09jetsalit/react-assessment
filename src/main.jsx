import React from "react";
import ReactDOM from "react-dom/client";
// import Login from "./Login";
// import Signup from "./Signup";
import Owner from "./component/Owner";
import Home from "./Home";

import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  // insert your path here
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Owner",
    element: <Owner />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
