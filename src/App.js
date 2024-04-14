import React from "react";
import ReactDOM from "react-dom/client";

import Headers from "./components/Headers";
import BagCategories from "./components/BagCategories";
import ProductCard from "./components/ProductCard";
import Body from "./components/Body";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import TravelPage from "./components/TravelPage";
import Accesories from "./components/Accesories";
import Gifting from "./components/Gifting";
import Jewelery from "./components/Jewelery";

const Applayout = () => {
  return (
    <div className="bg-black min-h-screen p-5">
      <Headers />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/bags", element: <ProductCard /> },
      { path: "/travel", element: <TravelPage /> },
      { path: "/accesories", element: <Accesories /> },
      { path: "/gifting", element: <Gifting /> },
      { path: "/jewelery", element: <Jewelery /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
