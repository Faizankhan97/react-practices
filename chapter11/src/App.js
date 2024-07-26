import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurtMenu from "./component/RestaurtMenu";
import UserContext from "./utils/";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading 

const Grocery = lazy(() => import("./component/Grocery"));

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState()

  useEffect(() => {
    const data = {
      name: "Faizan Khan"
    }
    setUserInfo(data?.name)
  }, [])
  
  return (
    <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurts/:resId",
        element: <RestaurtMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
