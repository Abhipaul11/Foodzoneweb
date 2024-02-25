import React from 'react'
import { useState,useEffect} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Homecss from "./Home.module.css"
import Registercss from "./Register.module.css"; 
import { firebaseconfig } from "../firebaseConfig"; 

const Login = () => { 
    const redirect = useNavigate()

    const[email,setEmail] = useState('') 
    const[password,setPassword] = useState('') 

    const handleauth = async (e)=>{
      e.preventDefault();
       
      try{
        const user = await firebaseconfig.auth().signInWithEmailAndPassword(email,password);
        if(user){
          alert("Login successfully");
          redirect("/Foodzoneapp");
        }
      }
      catch(error){
        alert(error)
      }
    }   
      return (
        <> 
          <div className={Homecss.hero}> 
            {/* <img src="./food2.jpg" alt="" /> */}
            <div className={Homecss.content}>
              <h4>Welcome to Foodzone </h4>
              <h2>FoodZone opened on 2023. Now we can deliver foods from your nearest Outlets through our online web-app </h2>
              <p>To order & book first Register then Login to see all the features</p> 
            </div>

          </div>
          <div className={Registercss.registercontainer}>
            <div className={Registercss.form}>
              <h2>Login</h2>
              <div className={Registercss.box}> 
                <input type="email" placeholder="Email id" value={email} onChange={(e)=>setEmail(e.target.value)} /> 
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} /> 
                <button onClick={handleauth } >Login</button>
                <p style={{fontSize:'20px'}}>For database connection it is little-bit slow after click on login button Wait for 5-second there will be an alert then click ok it will redirect to home page</p>
                <Link to="/Forgotpassword" style={{textAlign:'center',fontSize:'18px'}}>Forgot password?</Link> 
                <p>Don't have an account?<Link to="/">Register</Link>
                </p>
              </div>
            </div>
          </div>
        </>
      )

}

export default Login 