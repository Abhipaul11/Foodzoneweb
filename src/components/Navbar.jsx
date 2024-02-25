import React,{useState} from 'react'
import { IoRestaurantOutline } from "react-icons/io5";
import Navbarcss from './Navbar.module.css'
import { Link ,NavLink} from 'react-router-dom';  
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/firestore'   
 

function Navbar() { 
  const { logout } = useAuth0();

  
  return (
    <>
      <nav>
        <div className={Navbarcss.logo}><IoRestaurantOutline />Food<span>Zone</span></div> 
        <ul>
          <li><NavLink to="/Foodzoneapp" className={Navbarcss.text}>Home</NavLink></li> 
          <li><NavLink to="/Foodzoneapp/biriyani" className={Navbarcss.text}>Menu</NavLink></li>
          <li><NavLink to="/Foodzoneapp/blog" className={Navbarcss.text}>Blog</NavLink></li>
          <li><NavLink to="/Foodzoneapp/bookonline" className={Navbarcss.text}>Book-table</NavLink></li>
          <Link to="/register"><button style={{marginLeft:'5rem',marginTop:'10px',fontWeight:'700'}} >Logout</button></Link> 
        </ul>
        
      </nav>
      
    </>
  )
}

export default Navbar

