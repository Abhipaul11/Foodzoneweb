import React from "react";
import Page1css from "./Page1.module.css";
function Page1() {
  return (
    <>
      <div className={Page1css.container}>
        <div className={Page1css.box}>
          <div className={Page1css.card}>
            <img
              src="https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <p>Paneer tikka</p>
            <p>Rs-160</p>
          </div>
          <div className={Page1css.card}>
            <img
              src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <p>Green salad</p>
            <p>Rs-130</p>
          </div>
          <div className={Page1css.card}>
            <img
              src="https://images.pexels.com/photos/1150447/pexels-photo-1150447.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <p>Mixed Pasta</p>
            <p>Rs-140</p>
          </div>
          <div className={Page1css.card}>
            <img
              src="https://images.pexels.com/photos/693268/pexels-photo-693268.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <p>Sausage</p>
            <p>Rs-180</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page1;
