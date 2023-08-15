import React, { Suspense, lazy,  useState , useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";

//Context
import UserContext from "./utils/UserContext";

//Components
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Conatct";
import Error from "./components/Error";
import RestaurantItem from "./components/RestaurantItem";
//import Grocery from "./components/Grocery";

const Grocery = lazy(() => import('./components/Grocery'))

const AppLayout = () => {
  const [userName , setUserName] = useState()

  useEffect(() => {
    //It makes the APi call and get the user name
    const data = {
      name : "Charan"
    }
    setUserName(data.name)
  },[])

  return (
    <UserContext.Provider value={{loggedInUser : userName , setUserName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
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
        path: 'grocery',
        element : <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
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
