import React from 'react'
import Slidecardcss from './Slidecard.module.css'

function Slidecard({city,image}) {
  return (
    <>
      <div className={Slidecardcss.container}>
        <div className={Slidecardcss.gradient}>
            <p>{city}</p>  
        </div>
        <img src={image} alt="" />
      </div>
    </>
  )
}

export default Slidecard
