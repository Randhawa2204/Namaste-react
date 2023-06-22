import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter , RouterProvider } from "react-router-dom";

//Components
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Conatct";
import Error from "./components/Error";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRoute = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout />,
    errorElement : <Error />
  },
  {
    path : '/about',
    element : <About />
  },
  {
    path : '/contact',
    element : <Contact />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
