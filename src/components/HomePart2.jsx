import React from "react";
import { Link } from "react-router-dom";
import HomePart2css from "./HomePart2.module.css";
import { FaIndianRupeeSign } from "react-icons/fa6";

function HomePart2({ item, location, price, itemImage }) {
  return (
    <>
      <Link to="www.google.com">
        <div className={HomePart2css.card}>
          <img src={itemImage} alt="" />
          <div className={HomePart2css.details}>
            <p>⭐⭐⭐⭐⭐</p>
            <p>{item}</p>
            <p>{location}</p>
            <p>
              <FaIndianRupeeSign />
              {price}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default HomePart2;
