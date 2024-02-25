import React from "react";
import { Link } from "react-router-dom";
import Homecss from "./Home.module.css";
import Navbar from "./Navbar";
import Page1 from "../Designpages/Page1";
function Home2() {
  return (
    <>
      <div className={Homecss.hero}>
        <Navbar />
        {/* <img src="./food2.jpg" alt="" /> */}
        <div className={Homecss.content}>
        <h4>Welcome to Foodzone</h4>
          <h2>FoodZone opened on 2023. Now we can deliver foods from your nearest Outlets through our online web-app </h2>
          <p> FoodZone is a comfortable, brasserie-style restaurant offering everything you love about cuisine without the attitude.It features classic dishes such as well as fresh salads</p>
          <div className={Homecss.btn}>
            
              <Link to="/Foodzoneapp/menu" className={Homecss.book}>
              <button>Order online</button>
              </Link>
            
          </div>
        </div>
      </div>

      <h2 style={{textAlign:'center',backgroundColor:'aliceblue',padding:'10px',fontFamily:'cursive',color:'brown'}}>Today's best deals with 60% off </h2>
      <Page1 />

      <div className={Homecss.btngroup}>
        <h2 className={Homecss.recomend}>Recommend food for you</h2>
        <Link to="/Foodzoneapp/allitem" className={Homecss.text}>
          <button className={Homecss.btn}>All</button>
        </Link>
        <Link to="/Foodzoneapp/chinese" className={Homecss.text}>
          <button className={Homecss.btn}>Chinese</button>
        </Link>
        <Link to="/Foodzoneapp/indian" className={Homecss.text}>
          <button className={Homecss.btn}>Indian</button>
        </Link>
        <Link to="/Foodzoneapp/pizzaBurger" className={Homecss.text}>
          <button className={Homecss.btn}>Pizza</button>
        </Link> 
      </div>
    </>
  );
}

export default Home2;
