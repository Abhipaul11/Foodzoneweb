import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Menucss from "./Menu.module.css";
function Menu() {
  return (
    <>
      
      <div className={Menucss.menu}>
       <Navbar />
        <div className={Menucss.menus}>
          <div className={Menucss.menus1}>
            <button>
              <Link to="/Foodzoneapp/biriyani" className={Menucss.text}>
                <img src="/biriyani.png" alt="" />
                <p>Biriyani</p>
              </Link>
            </button>
            <button>
              <Link to="/Foodzoneapp/pizza" className={Menucss.text}>
                <img src="/pizza.png" alt="" />
                <p>Pizza's</p>
              </Link>
            </button>
            <button>
              <Link to="/Foodzoneapp/dosa" className={Menucss.text}>
                <img src="/dosa.png" alt="" />
                <p>Dosa</p>
              </Link>
            </button>
            <button>
              <Link to="/Foodzoneapp/friedrice" className={Menucss.text}>
                <img src="/friedrice.png" alt="" />
                <p>Fried Rice</p>
              </Link>
            </button>
            <button>
              <Link to="/Foodzoneapp/icecreams" className={Menucss.text}>
                <img src="/Icecream.png" alt="" />
                <p>Icecreams</p>
              </Link>
            </button>
          </div>

          <div className={Menucss.menus1}>
            <button>
              <Link to="/Foodzoneapp/muttonkasha" className={Menucss.text}>
                <img src="/mutton.png" alt="" />
                <p>Mutton </p>
              </Link>
            </button>
            <button>
              <Link to="/Foodzoneapp/paratha" className={Menucss.text}>
                <img src="/Paratha.png" alt="" />
                <p>Paratha</p>
              </Link>
            </button>
            <button>
              <Link to="/Foodzoneapp/momo" className={Menucss.text}>
                <img src="/momo.png" alt="" />
                <p>Momos</p>
              </Link>
            </button>
            <button>
              <Link to="/Foodzoneapp/thali" className={Menucss.text}>
                <img src="/thali.png" alt="" />
                <p>thali</p>
              </Link>
            </button>
          </div>
        </div>
        <h1>Food items</h1>
      </div>
    </>
  );
}

export default Menu;
