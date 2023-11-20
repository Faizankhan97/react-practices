import React from "react";
import ReactDOM from "react-dom/client";

import Body from "./component/Body";
import About from "./component/About";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Layout from "./component/Layout";
import RestaurantMenu from "./component/RestaurantMenu";

const AppLayout = () => {
  return (
    <div>
      <Layout />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
