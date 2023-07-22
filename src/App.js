import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
