import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Blogcard from "./Blogcard";
import Blogcss from "./Blog.module.css";
import { CiAirportSign1 } from "react-icons/ci"
import Slidecard from "./Slidecard";
import Footer from "./Footer";
function Blog() {
  return (
    <> 
  
      <div className={Blogcss.container}>
        <Navbar />  
          <h3>As a leading online, ride-hailing brand, Foodzone launched its online food delivery service with a good digital system.</h3>
          <p>We have 10 branch all over India  lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates.</p>
          <div className={Blogcss.btngroup} >
            <button>Top rated</button> 
            <button>Book table</button> 
            <button>Order online</button> 
          </div>
           
        <div className={Blogcss.slider}>
          <Slidecard image="https://images.pexels.com/photos/12296370/pexels-photo-12296370.jpeg?auto=compress&cs=tinysrgb&w=600" city="Kolkata ph-8017328094" />
          <Slidecard image="https://images.pexels.com/photos/12153574/pexels-photo-12153574.jpeg?auto=compress&cs=tinysrgb&w=600" city="Mumbai ph-8017328094" />
          <Slidecard image="https://images.pexels.com/photos/590477/pexels-photo-590477.jpeg?auto=compress&cs=tinysrgb&w=600" city="Delhi ph-8017328094" />
          <Slidecard image="https://images.pexels.com/photos/12463132/pexels-photo-12463132.jpeg?auto=compress&cs=tinysrgb&w=600" city="Darjeeling ph-8017328094" />
          <Slidecard image="https://images.pexels.com/photos/10457901/pexels-photo-10457901.jpeg?auto=compress&cs=tinysrgb&w=600" city="Srinagar ph-8017328094" />
          <Slidecard image="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600" city="Pune ph-8017328094" />
          <Slidecard image="https://images.pexels.com/photos/1269025/pexels-photo-1269025.jpeg?auto=compress&cs=tinysrgb&w=600" city="Goa ph-8017328094" />
          <Slidecard image="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=600" city="Manali ph-8017328094" />
          <Slidecard image="https://images.pexels.com/photos/12227752/pexels-photo-12227752.jpeg?auto=compress&cs=tinysrgb&w=600" city="Shimla ph-8017328094" />
          <Slidecard image="https://images.pexels.com/photos/11517744/pexels-photo-11517744.jpeg?auto=compress&cs=tinysrgb&w=600" city="Sikkim ph-8017328094" />
        </div>
      </div>

      <div className={Blogcss.container2}>
        <Blogcard rs="Rs-185" image='https://images.pexels.com/photos/1059943/pexels-photo-1059943.jpeg?auto=compress&cs=tinysrgb&w=600' food="Fried chicken" star="⭐⭐⭐⭐" />
        <Blogcard rs="Rs-178" image='https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600' food="Burgers (cheese/ bacon)" star="⭐⭐⭐⭐⭐" />
        <Blogcard rs="Rs-220" image='https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=600' food="Chicken soup" star="⭐⭐⭐⭐⭐" />
        <Blogcard rs="Rs-173" image='https://images.pexels.com/photos/12364377/pexels-photo-12364377.jpeg?auto=compress&cs=tinysrgb&w=600' food="Chicken Pesto" star="⭐⭐⭐⭐" />
        <Blogcard rs="Rs-167" image='https://images.pexels.com/photos/5836618/pexels-photo-5836618.jpeg?auto=compress&cs=tinysrgb&w=600' food="Grilled cheese" star="⭐⭐⭐⭐⭐" />
        <Blogcard rs="Rs-180" image='https://images.pexels.com/photos/12034629/pexels-photo-12034629.jpeg?auto=compress&cs=tinysrgb&w=600' food="Culver's Wisconsin Cheese Curds" star="⭐⭐⭐⭐" />
        <Blogcard rs="Rs-120" image='https://images.pexels.com/photos/14001637/pexels-photo-14001637.jpeg?auto=compress&cs=tinysrgb&w=600' food="Chicken Nuggets" star="⭐⭐⭐⭐⭐" />
        <Blogcard rs="Rs-235" image='https://images.pexels.com/photos/5724558/pexels-photo-5724558.jpeg?auto=compress&cs=tinysrgb&w=600' food="Mix Noodles" star="⭐⭐⭐⭐⭐" />
        <Blogcard rs="Rs-125" image='https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg?auto=compress&cs=tinysrgb&w=600' food="Kathal Biryani Recipe" star="⭐⭐⭐⭐" />
        <Blogcard rs="Rs-200" image='https://images.pexels.com/photos/9609835/pexels-photo-9609835.jpeg?auto=compress&cs=tinysrgb&w=600' food="Tomato Paneer" star="⭐⭐⭐⭐⭐" />
        <Blogcard rs="Rs-285" image='https://images.pexels.com/photos/5739585/pexels-photo-5739585.jpeg?auto=compress&cs=tinysrgb&w=600' food="Grilled fish" star="⭐⭐⭐⭐⭐" />
        <Blogcard rs="Rs-234" image='https://th.bing.com/th?id=OSK.251ff9967752f4380eb242c84b1ac8e2&w=176&h=117&rs=2&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1' food="Mutton + Mixed-FriedRice" star="⭐⭐⭐⭐" />
         
      </div>

      <Footer/>
    </>
  );
}

export default Blog;
