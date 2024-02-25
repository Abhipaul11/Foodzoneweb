import React from 'react'
import Home2 from '../components/Home2'
import Homecss from "../components/Home.module.css";
import HomePart2 from '../components/HomePart2';
import Footer from '../components/Footer';
import About from '../components/About';
function Chinese() {
  return (
    <>
      <Home2/>
      <div className={Homecss.part2}>
        <HomePart2 item='Chowmin' location='FZ special items' price='130' itemImage="https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <HomePart2 item='Chicken fried momos' location='FZ special items' price='180' itemImage="https://images.pexels.com/photos/19964399/pexels-photo-19964399/free-photo-of-chips-and-popcorn-in-close-up-view.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <HomePart2 item='Chicken Fried Rice' location='FZ special items' price='140' itemImage="https://images.pexels.com/photos/12842255/pexels-photo-12842255.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <HomePart2 item='Kung Pao Chicken' location='FZ special items' price='190' itemImage="https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Kung-Pao-Chicken.jpg" />
        <HomePart2 item='Spring Rolls(4pcs).' location='FZ special items' price='90' itemImage="https://images.pexels.com/photos/4001867/pexels-photo-4001867.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <HomePart2 item='Wonton Soup.' location='FZ special itemsn' price='190' itemImage="https://images.pexels.com/photos/3493579/pexels-photo-3493579.jpeg?auto=compress&cs=tinysrgb&w=600" />
      </div>
      <About/>
      <Footer/>
    </>
  )
}

export default Chinese
