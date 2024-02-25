import React from "react";
import { Link } from "react-router-dom";
import Homecss from "./Home.module.css";
import HomePart2 from "./HomePart2";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Blog from "./Blog";
import Page1 from "../Designpages/Page1";
import About from "./About";

function Home() {
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

      <div className={Homecss.part2}>
        <HomePart2 item="Chicken biriyani" location="FZ special items"  price="150" itemImage="https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg?auto=compress&cs=tinysrgb&w=600"  />

        <HomePart2 item="Margherita pizza" location="FZ special items"  price="230"  itemImage="https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=600"  />

        <HomePart2 item="Pasta" location="FZ special items"  price="230" itemImage="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600"  />

        <HomePart2  item="Paratha & curry" location="FZ special items"  price="180"  itemImage="https://images.pexels.com/photos/15014921/pexels-photo-15014921/free-photo-of-aloo-dum.jpeg?auto=compress&cs=tinysrgb&w=600"  />

        <HomePart2  item="Chilli fish"  location="FZ special items"  price="270" itemImage="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600"  />

        <HomePart2 item="juice" location="FZ special items"  price="220" itemImage="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600" />
      </div>
      <About/>
      <Footer />
    </>
  );
}

export default Home;
