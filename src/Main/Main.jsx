
import Home from "../components/Home/Home";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../Root/Root";
import LogIn from "../components/LogIn/LogIn";
import SignUp from "../components/SignUp/SignUp";
import Profile from "../components/Profile/Profile";
import ContextProvider from "../components/ContextProvider/ContextProvider";

  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <LogIn></LogIn>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/profile',
            element: <Profile></Profile>
        }
      ]
    },
  ]);
  

const Main = () => {
    return (
       <ContextProvider><RouterProvider router={router}></RouterProvider></ContextProvider>
    );
};

export default Main;