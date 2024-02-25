import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Aboutcss from "./About.module.css";
import { GiHamburger } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import { MdNoFood } from "react-icons/md";
function About() {
  return (
    <>
      <h2>About US</h2>
      <div className={Aboutcss.hero}>
          <img src="https://images.pexels.com/photos/12261096/pexels-photo-12261096.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        
        <div className={Aboutcss.content}>
          <h2>The Fastest in delivering your Food</h2>
          <p>
          We believe in the artistry of food. Our culinary team, led by is dedicated to crafting dishes that tantalize the taste buds and celebrate the finest ingredients. From farm-fresh produce to premium cuts of meat, we source only the best to ensure every bite is a culinary delight.
          </p>
          <div style={{ display: "flex" }}>
            <Link>
              <button className={Aboutcss.btn}>
                <span>Order now</span>
              </button>
            </Link>
            <Link>
              <button className={Aboutcss.btn}>
                <span>Gallery</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={Aboutcss.part2}>  
        <div className={Aboutcss.box}>
          <p style={{ color: "brown", fontSize: "4rem", margin: "1px" }}> <FaPizzaSlice />  </p>
          <h3>Tasty foods</h3>
          <p>A visit to our restaurant will prove one of the best experiences in your life. You must try all our items before you decide how we are. We dish out new items every month.#delicacy It is the craziest place for some crazy food.</p>
        </div>
        <div className={Aboutcss.box}>
          <p style={{ color: "brown", fontSize: "4rem", margin: "1px" }}> <MdDeliveryDining />  </p>
          <h3>Fast delivary</h3>
          <p>The freshest food, delivered daily.“Choose from our menu of deliciousness! “Hot, fresh, and delivered to your door.“We guarantee satisfaction with every bite!”Our food is prepared with love and delivers happiness.”</p>
        </div>
        <div className={Aboutcss.box}>
          <p style={{ color: "brown", fontSize: "20px", margin: "10px" }}>  7k+ Customers </p>
          <p style={{padding:'1rem'}}>Nothing’s better than this. Craving now? Order before we close down today!The best place ever to get your burger fix. We’ve celebrated special occasions in this restaurant.</p>
        </div>
        <div className={Aboutcss.box}>
          <p style={{ color: "brown", fontSize: "20px", margin: "10px" }}> 15k+ online orders  </p>
          <p style={{padding:'1rem'}}>Food is necessary for us just like fuel is necessary to run an engine.From the best restaurateur in the country. #restaurant Good time, Great taste.The healthiest food you can ever think of.Good food is the foundation of happiness.</p>
        </div>
      </div>
 
    </>
  );
}

export default About;
