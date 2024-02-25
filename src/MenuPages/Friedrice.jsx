import React, { useState } from "react";
import Menu from '../components/Menu'
import Card from '../components/Card'
import Footer from '../components/Footer';

function Friedrice() { 

  const [num, setNum] = useState(0);
  const [total, setTotal] = useState(0);
  const add = () => {
    setNum(num + 1);
    setTotal(total + 100);
  };
  const remove = () => {
    if (num > 0) {
      setNum(num - 1);
      setTotal(total - 100);
    } else {
      setNum(0);
    }
  };

  const [num2, setNum2] = useState(0);
  const [total2, setTotal2] = useState(0);
  const add2 = () => {
    setNum2(num2 + 1);
    setTotal2(total2 + 150);
  };
  const remove2 = () => {
    if (num2 > 0) {
      setNum2(num2 - 1);
      setTotal2(total2 - 150);
    } else {
      setNum2(0);
    }
  };

  const [num3, setNum3] = useState(0);
  const [total3, setTotal3] = useState(0);
  const add3 = () => {
    setNum3(num3 + 1);
    setTotal3(total3 + 90);
  };
  const remove3 = () => {
    if (num3 > 0) {
      setNum3(num3 - 1);
      setTotal3(total3 - 90);
    } else {
      setNum3(0);
    }
  };

  const [num4, setNum4] = useState(0);
  const [total4, setTotal4] = useState(0);
  const add4 = () => {
    setNum4(num4 + 1);
    setTotal4(total4 + 80);
  };
  const remove4 = () => {
    if (num4 > 0) {
      setNum4(num4 - 1);
      setTotal4(total4 - 80);
    } else {
      setNum4(0);
    }
  };

  const [num5, setNum5] = useState(0);
  const [total5, setTotal5] = useState(0);
  const add5 = () => {
    setNum5(num5 + 1);
    setTotal5(total5 + 100);
  };
  const remove5 = () => {
    if (num5 > 0) {
      setNum5(num5 - 1);
      setTotal5(total5 - 100);
    } else {
      setNum5(0);
    }
  };

  const [num6, setNum6] = useState(0);
  const [total6, setTotal6] = useState(0);
  const add6 = () => {
    setNum6(num6 + 1);
    setTotal6(total6 + 160);
  };
  const remove6 = () => {
    if (num6> 0) {
      setNum6(num6 - 1);
      setTotal6(total6 - 160);
    } else {
      setNum6(0);
    }
  };

  const [num7, setNum7] = useState(0);
  const [total7, setTotal7] = useState(0);
  const add7 = () => {
    setNum7(num7 + 1);
    setTotal7(total7 + 250);
  };
  const remove7 = () => {
    if (num7> 0) {
      setNum7(num7 - 1);
      setTotal7(total7- 250);
    } else {
      setNum7(0);
    }
  };
 

  return (
    <>
      <Menu/> 
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "floralwhite",
          justifyContent:'center',
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            border: "2px solid black",
            backgroundColor: "aliceblue",
            borderRadius: "1rem",
            marginLeft: "40px",
            width: "15rem",
            marginTop: "1rem",
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
          }}
        >
          <Card
            Menuimg="https://images.pexels.com/photos/3926124/pexels-photo-3926124.jpeg?auto=compress&cs=tinysrgb&w=600"
            Menu=" Chicken Fried Rice (100)"
            para="from New Arsalan biryani"
            off="20% off"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <button onClick={remove}>-</button>
            <button
              style={{
                backgroundColor: "rgb(94, 33, 94)",
                margin: "0px 4px 0px 4px",
              }}
            >
              <span
                style={{ color: "white", fontSize: "1rem", fontWeight: "500" }}
              >
                Added item : {num} 
              </span> 
            </button>
            <button onClick={add}> +</button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <button
              style={{
                backgroundColor: "red",
                width: "12rem",
                height: "3rem",
                borderRadius: "8px",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                Order now : total {total}
              </span> 
            </button>
          </div>
        </div>
        <div
          style={{
            border: "2px solid black",
            borderRadius: "1rem",
            backgroundColor: "aliceblue",
            marginLeft: "40px",
            width: "15rem",
            marginTop: "1rem",
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
          }}
        >
          <Card
            Menuimg="https://static.wixstatic.com/media/2ef66c_82d201217b384789802478028dedee82~mv2.jpg/v1/fill/w_525,h_525,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2ef66c_82d201217b384789802478028dedee82~mv2.jpg"
            Menu="Shrimp Fried Rice(150)"
            para="loremjyhcujujyuj"
            off="23% off"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <button onClick={remove2} >-</button>
            <button
              style={{
                backgroundColor: "rgb(94, 33, 94)",
                margin: "0px 4px 0px 4px",
              }}
            >
              <span
                style={{ color: "white", fontSize: "1rem", fontWeight: "500" }}
              >
                Added item :  {num2}
              </span> 
            </button>
            <button onClick={add2} > +</button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <button
              style={{
                backgroundColor: "red",
                width: "12rem",
                height: "3rem",
                borderRadius: "8px",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                Order now : total  {total2}
              </span> 
            </button>
          </div>
        </div>
        <div
          style={{
            border: "2px solid black",
            backgroundColor: "aliceblue",
            borderRadius: "1rem",
            marginLeft: "40px",
            width: "15rem",
            marginTop: "1rem",
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
          }}
        >
          <Card
            Menuimg="https://static.wixstatic.com/media/2ef66c_106545f08c5a4a3ebd88f838accf665b~mv2.jpg/v1/fill/w_420,h_420,al_c,lg_1,q_80,enc_auto/2ef66c_106545f08c5a4a3ebd88f838accf665b~mv2.jpg"
            Menu=" Fried Rice & Sweet Soy Sauce(90)"
            para="loremjyhcujujyuj"
            price="180"
            off="16% off"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <button onClick={remove3}>-</button>
            <button
              style={{
                backgroundColor: "rgb(94, 33, 94)",
                margin: "0px 4px 0px 4px",
              }}
            >
              <span
                style={{ color: "white", fontSize: "1rem", fontWeight: "500" }}
              >
                Added item :  {num3}
              </span> 
            </button>
            <button onClick={add3} > +</button> 
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <button
              style={{
                backgroundColor: "red",
                width: "12rem",
                height: "3rem",
                borderRadius: "8px",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                Order now : total {total3}
              </span> 
            </button>
          </div>
        </div>
        <div
          style={{
            border: "2px solid black",
            backgroundColor: "aliceblue",
            borderRadius: "1rem",
            marginLeft: "40px",
            width: "15rem",
            marginTop: "1rem",
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
          }}
        >
          <Card
            Menuimg="https://static.wixstatic.com/media/2ef66c_714ea989e97e487687916f8bbfa538ce~mv2.jpg/v1/fill/w_525,h_365,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2ef66c_714ea989e97e487687916f8bbfa538ce~mv2.jpg"
            Menu="Red Pepper-Almond Fried Rice(80)"
            para="loremjyhcujujyuj"
            price="180"
            off="34% off"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <button onClick={remove4}>-</button>
            <button
              style={{
                backgroundColor: "rgb(94, 33, 94)",
                margin: "0px 4px 0px 4px",
              }}
            >
              <span
                style={{ color: "white", fontSize: "1rem", fontWeight: "500" }}
              >
                Added item :  {num4}
              </span> 
            </button>
            <button onClick={add4} > +</button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <button
              style={{
                backgroundColor: "red",
                width: "12rem",
                height: "3rem",
                borderRadius: "8px",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                Order now : total  {total4}
              </span> 
            </button>
          </div>
        </div>

        <div
          style={{
            border: "2px solid black",
            backgroundColor: "aliceblue",
            borderRadius: "1rem",
            marginLeft: "40px",
            width: "15rem",
            marginTop: "1rem",
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
          }}
        >
          <Card
            Menuimg="https://images.pexels.com/photos/7593230/pexels-photo-7593230.jpeg?auto=compress&cs=tinysrgb&w=600"
            Menu="Yang Chow Fried Rice(100)"
            para="loremjyhcujujyuj"
            price="180"
            off="17% off"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <button onClick={remove5}>-</button>
            <button
              style={{
                backgroundColor: "rgb(94, 33, 94)",
                margin: "0px 4px 0px 4px",
              }}
            >
              <span
                style={{ color: "white", fontSize: "1rem", fontWeight: "500" }}
              >
                Added item :  {num5}
              </span> 
            </button>
            <button onClick={add5} > +</button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <button
              style={{
                backgroundColor: "red",
                width: "12rem",
                height: "3rem",
                borderRadius: "8px",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                Order now : total  {total5}
              </span> 
            </button>
          </div>
        </div>

        <div
          style={{
            border: "2px solid black",
            backgroundColor: "aliceblue",
            borderRadius: "1rem",
            marginLeft: "40px",
            width: "15rem",
            marginTop: "1rem",
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
          }}
        >
          <Card
            Menuimg="https://static.wixstatic.com/media/2ef66c_c2d5ad2197174bf280bec7b4d67127c0~mv2.jpg/v1/fill/w_525,h_395,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2ef66c_c2d5ad2197174bf280bec7b4d67127c0~mv2.jpg"
            Menu="Vegetable Fried Rice(160)"
            para="loremjyhcujujyuj"
            price="180"
            off="34% off"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <button onClick={remove6} >-</button>
            <button
              style={{
                backgroundColor: "rgb(94, 33, 94)",
                margin: "0px 4px 0px 4px",
              }}
            >
              <span
                style={{ color: "white", fontSize: "1rem", fontWeight: "500" }}
              >
                Added item :  {num6}
              </span> 
            </button>
            <button onClick={add6} > +</button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <button
              style={{
                backgroundColor: "red",
                width: "12rem",
                height: "3rem",
                borderRadius: "8px",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                Order now : total {total6}
              </span> 
            </button>
          </div>
        </div>
        <div
          style={{
            border: "2px solid black",
            backgroundColor: "aliceblue",
            borderRadius: "1rem",
            marginLeft: "40px",
            width: "15rem",
            marginTop: "1rem",
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
          }}
        >
          <Card
            Menuimg="https://images.pexels.com/photos/12842255/pexels-photo-12842255.jpeg?auto=compress&cs=tinysrgb&w=600"
            Menu="Ham and Egg Fried Rice(250)"
            para="loremjyhcujujyuj"
            price="180"
            off="45% off"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <button onClick={remove7} >-</button>
            <button
              style={{
                backgroundColor: "rgb(94, 33, 94)",
                margin: "0px 4px 0px 4px",
              }}
            >
              <span
                style={{ color: "white", fontSize: "1rem", fontWeight: "500" }}
              >
                Added item : {num7} 
              </span> 
            </button>
            <button onClick={add7} > +</button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <button
              style={{
                backgroundColor: "red",
                width: "12rem",
                height: "3rem",
                borderRadius: "8px",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                Order now : total  {total7}
              </span> 
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Friedrice