import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

/*
  Header
   -logo
   -menu list (Home,about,contact us)
  
  Body
   -Search Box
   -Restaurant list
    -Restaurant Card (Image,Name,Rating,Cuisine)
  
  Footer
   -Copyright


*/

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about", //react will assume this comes from root if '/' is mentioned. localhost:1234/about
        element: <About />,
        children: [
          {
            path: "profile", //parentpath/{path}
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
