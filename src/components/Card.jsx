import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

import { FiMinus } from "react-icons/fi";

import { Link } from "react-router-dom";
import Cardcss from "./Card.module.css";
function Card({ Menuimg, Menu, para, price, off }) {
  const [num, setNum] = useState(0);
 
  const add = () => {
    setNum(num + 1);
     
  };
  const remove = () => {
    if (num > 0) {
      setNum(num - 1);
      setMoney(money - 180);
    } else {
      setNum(0);
     
    }
  };

  return (
    <>
      <div className={Cardcss.card}>
        <div className={Cardcss.topbadge}>
          <p>{off}</p>
        </div>
        <img src={Menuimg} alt="" />
        <div className={Cardcss.bottom}>
          <h3>{Menu}</h3>
          <p>{para}</p>
           
          {/* <div style={{ display: "flex", justifyContent:'center' }}>
            <button className={Cardcss.plus} onClick={remove}><FiMinus /></button>
            <button className={Cardcss.number}><span style={{color:'white',fontSize:'16px',fontWeight:'500',letterSpacing:'1px'}}>Added item : {num}</span></button>
            <button className={Cardcss.minus} onClick={add}><FiPlus /></button>
          </div>  */}
        </div>
      </div>
    </>
  );
}

export default Card;
