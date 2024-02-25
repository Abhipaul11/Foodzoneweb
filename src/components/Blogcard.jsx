import React from 'react'
import Blogcardcss from './Blogcard.module.css'
import { FaRupeeSign } from "react-icons/fa6";

function Blogcard({rs,food,star,image }) {
  return (
    <>
      <div className={Blogcardcss.card}>
         
        <img src={image} alt="" className={Blogcardcss.cardimg} />
        
        <div style={{display:'flex' }}>
         <p style={{fontSize:'18px',float:'left',color:'black'}}>{food}</p> 
         <p className={Blogcardcss.sticker} style={{fontSize:'12px',textAlign:'right',backgroundColor:'brown',borderRadius:'5px'}}>{rs}</p>
         </div>
         <span >{star}</span>
         
      </div>
      
    </>
  )
}

export default Blogcard
