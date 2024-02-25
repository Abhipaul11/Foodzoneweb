import React from 'react'
import Home2 from '../components/Home2'
import Homecss from "../components/Home.module.css";
import HomePart2 from '../components/HomePart2';
import Footer from '../components/Footer';
import About from '../components/About';
function Indian() {
  return (
    <>
      <Home2/>
      <div className={Homecss.part2}>
        <HomePart2 item='Butter Naan & curry' location='FZ special items' price='160' itemImage="https://images.pexels.com/photos/12737919/pexels-photo-12737919.jpeg?auto=compress&cs=tinysrgb&w=600" />

        <HomePart2 item='Mutton masala' location='FZ special items' price='250' itemImage="https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=600" />

        <HomePart2 item='Fish thali' location='FZ special itemsn' price='230' itemImage="https://images.pexels.com/photos/8951570/pexels-photo-8951570.jpeg?auto=compress&cs=tinysrgb&w=600" />

        <HomePart2 item='Dosa' location='FZ special items' price='180' itemImage="https://images.pexels.com/photos/15014921/pexels-photo-15014921/free-photo-of-aloo-dum.jpeg?auto=compress&cs=tinysrgb&w=600" />

        <HomePart2 item='Tandoori Chicken' location='FZ special items' price='180' itemImage="https://images.pexels.com/photos/9609832/pexels-photo-9609832.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <HomePart2 item='Veg thali' location='FZ special items' price='150' itemImage="https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=600" />

        
      </div>
      <About/>
      <Footer/>
    </>
  )
}

export default Indian
