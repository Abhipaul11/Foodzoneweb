import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";
import { Auth0Provider } from '@auth0/auth0-react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
 } from "react-router-dom";
import About from "./components/About"; 
import Home from "./components/Home";
// import App from "./App";
import Chinese from "./ButtonPages/Chinese";
import Indian from "./ButtonPages/Indian";
import Pizza from "./ButtonPages/Pizza";
import Allitem from "./ButtonPages/Allitem";
import Menu from "./components/Menu";
import Biriyani from "./MenuPages/Biriyani";
import Pizzas from "./MenuPages/Pizzas";
import Dosa from "./MenuPages/Dosa";
import Friedrice from "./MenuPages/Friedrice";
import Icecreams from "./MenuPages/Icecreams";
import Mutton from "./MenuPages/Mutton";
import Momos from "./MenuPages/Momos";
import Thali from "./MenuPages/Thali";
import Paratha from "./MenuPages/Paratha";
import Blog from "./components/Blog";
import Form from "./components/Form";  
import Register from "./components/Register";
import Login from "./components/Login"; 
import Forgotpass from "./Designpages/Forgotpass";

const router = createBrowserRouter([
  {
    path: "",
    element: <Register />,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/Foodzoneapp/login",
    element: <Login/>
  }, 
  {
    path: "/Forgotpassword",
    element: <Forgotpass/>
  },
  {
    path: "/Foodzoneapp",
    element: <Home />,
  }, 
  {
    path: "/Foodzoneapp/blog",
    element:<Blog/>,
  },
  {
    path: "/Foodzoneapp/bookonline",
    element:  <Form/>
  },
  {
    path: "/Foodzoneapp/menu",
    element: <Biriyani />,
  },
  {
    path: "/Foodzoneapp/menu",
    element: <Menu />,
  },
  {
    path: "/Foodzoneapp/allitem",
    element: <Home />,
  },
  {
    path: "/Foodzoneapp/chinese",
    element: <Chinese />,
  },
  {
    path: "Foodzoneapp/indian",
    element: <Indian />,
  },
  {
    path: "/Foodzoneapp/pizzaBurger",
    element: <Pizza />,
  },
  {
    path: "/Foodzoneapp/biriyani",
    element: <Biriyani />,
  },
  {
    path: "/Foodzoneapp/pizza",
    element: <Pizzas />,
  },
  {
    path: "/Foodzoneapp/dosa",
    element: <Dosa />,
  },
  {
    path: "/Foodzoneapp/friedrice",
    element: <Friedrice />,
  },
  {
    path: "/Foodzoneapp/icecreams",
    element: <Icecreams />,
  },
  {
    path: "/Foodzoneapp/muttonkasha",
    element: <Mutton />,
  },
  {
    path: "/Foodzoneapp/paratha",
    element: <Paratha />,
  }, 
  {
    path: "/Foodzoneapp/momo",
    element: <Momos />,
  },
  {
    path: "/Foodzoneapp/thali",
    element: <Thali />,
  },
  {
    path: "/Foodzoneapp/allitem",
    element: <Allitem />,
  },
  {
    path: "/Foodzoneapp/chinese",
    element: <Chinese />,
  },  
   
]);

//This method is not working  
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Home/>}>
//       <Route path='' element={<Home/>} />
//       <Route path="about" element= {<About/>}/>
//        <Route path="contact" element={<Contact />} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);