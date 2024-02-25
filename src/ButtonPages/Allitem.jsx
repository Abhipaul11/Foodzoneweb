import React from 'react'
import Home2 from '../components/Home2'
import Homecss from "../components/Home.module.css";
import HomePart2 from '../components/HomePart2';
import Footer from '../components/Footer';
function Allitem() {
  return (
    <>
      <Home2/>
      <div className={Homecss.part2}>
        <HomePart2 item='Chicken biriyani' location='From Foodzone special items' price='150' itemImage="https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg?auto=compress&cs=tinysrgb&w=600" />

        <HomePart2 item='Margherita pizza' location='loremghnfghnfgnfgn' price='230' itemImage="https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=600" />

        <HomePart2 item='Pasta' location='loremghnfghnfgnfgn' price='230' itemImage="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600" />

        <HomePart2 item='Paratha & curry' location='loremghnfghnfgnfgn' price='180' itemImage="https://images.pexels.com/photos/15014921/pexels-photo-15014921/free-photo-of-aloo-dum.jpeg?auto=compress&cs=tinysrgb&w=600" />

        
      </div>

      <Footer/>
    </>
  )
}

export default Allitem
