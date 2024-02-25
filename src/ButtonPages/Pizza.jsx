import React from 'react'
import Home2 from '../components/Home2'
import Homecss from "../components/Home.module.css";
import HomePart2 from '../components/HomePart2';
import Footer from '../components/Footer';
import About from '../components/About';
function Pizza() {
  return (
    <>
      <Home2/>
      <div className={Homecss.part2}>
        <HomePart2 item='Cheese Pizza' location='FZ special items' price='150' itemImage="https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2018/04/sicilian-cheese-1.jpg.webp" />

        <HomePart2 item='Margherita pizza' location='FZ special items' price='200' itemImage="https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=600" />

        <HomePart2 item='Chicken Pizza' location='FZ special items' price='230' itemImage="https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/11/The-210-Carnivore-pizza.jpg.webp" />

        <HomePart2 item='BBQ Chicken Pizza' location='FZ special items' price='260' itemImage="https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_184944413.jpg.webp" />

        
        <HomePart2 item='Supreme Pizza' location='FZ special items' price='190' itemImage="https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_244706695.jpg.webp" />
        <HomePart2 item='The works Pizza' location='FZ special items' price='168' itemImage="https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_84904876.jpg.webp" />

        
      </div>
      <About/>
      <Footer/>
    </>
  )
}

export default Pizza
