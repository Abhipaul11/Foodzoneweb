import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoRestaurantOutline } from "react-icons/io5";
import Footercss from './Footer.module.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer>
        <div className={Footercss.box}>
          <p>Office address :</p>
          <p>SM/b-23A Salt lake</p>
          <p>sector-1, Kolkata 700046</p>
          <p>Ph no: 01-0447-7565</p>
          <p>info@travelocity.com</p>
        </div>
        <div className={Footercss.box}>
          <ul>
            <li><Link to=""><span>Home</span></Link> </li>
            <li><Link to=""><span>Order now</span></Link></li>
            <li><Link to=""><span>Menus</span></Link></li>
            <li><Link to=""><span>Blogs</span></Link></li>
          </ul>
        </div>
        <div className={Footercss.box}>
          <h2>Quick links</h2>
          <ul>
            <li><Link to=""><span>SignIn</span></Link> </li>
            <li><Link to=""><span>Privacy Policy</span></Link></li>
            <li><Link to=""><span>Terms & Condition</span></Link></li>
            <li><Link to=""><span>Book now</span></Link></li>
          </ul>
          

        </div>
        <div className={Footercss.box}>
          <h2><IoRestaurantOutline />FoodZone</h2>
          <p>Here today dinner tommorow</p>
          <p style={{textAlign:'left'}}>Copyright @FoodZone 2022-2023. All Rights Reserved</p>
          <p style={{textAlign:'left'}}>Follow us</p>
          <div className={Footercss.mediaicons}>
           <a href="" target="_blank"><FaFacebookSquare className={Footercss.icon} /> </a>
           <a href="" target="_blank"><FaInstagram className={Footercss.icon} /></a>
           <a href="" target="_blank"><AiFillYoutube className={Footercss.icon}/></a>
           <a href="https://www.linkedin.com/in/abhijit-paul-942581217" target="_blank"><FaLinkedinIn  className={Footercss.icon} /></a>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer
