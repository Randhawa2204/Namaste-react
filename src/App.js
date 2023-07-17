import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";

//Components
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Conatct";
import Error from "./components/Error";
import RestaurantItem from "./components/RestaurantItem";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRoute = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout />,
    children :[
      {
        path : '/',
        element : <Body />
      },
      {
        path : '/about',
        element : <About />
      },
      {
        path : 'contact',
        element : <Contact />
      },
      {
        path : '/restaurant/:resId',
        element : <RestaurantItem />
      }
    ],
    errorElement : <Error />
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
