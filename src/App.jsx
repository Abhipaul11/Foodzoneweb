// import { useState } from "react";
// import React from 'react'
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
//   createRoutesFromElements,
// } from "react-router-dom";
// import About from "./components/About";
// import Card from "./components/Card";
// import Contact from "./components/Contact";
// import Home from "./components/Home";

import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from "react";
 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./components/About";
import Card from "./components/Card"; 
import Home from "./components/Home";
 
import Chinese from './ButtonPages/Chinese'; 
import Indian from './ButtonPages/Indian'; 
import Pizza from './ButtonPages/Pizza';
 

function App() {
  const [count, setCount] = useState(0);

   

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Home />}>
         
  //       <Route path="about" element={<About />} />
  //       <Route path="contact" element={<Contact />} />
  //     </Route>
  //   )
  // );

  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
}
export default App;
