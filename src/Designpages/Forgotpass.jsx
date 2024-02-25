import React, { useState,useRef } from "react";
import { Link } from "react-router-dom"; 
import { firebaseconfig } from "../firebaseConfig";

function Forgotpass() { 
    const[email,setEmail] = useState('') 

    const handleReset = async ()=>{
        try{
          await firebaseconfig.auth().sendPasswordResetEmail(email)
          alert("Password reset email has send to your gmail")
        }
        catch(error){
          alert(error)
        }
      }

  return (
    <>
        <h1>Forgot pasword</h1>
      <div style={{display:'flex',flexDirection:'column'}}>
       
            <input type="email" placeholder="Email id" value={email} onChange={(e)=>setEmail(e.target.value)} style={{margin:'1rem', padding: '8px 12px 8px 12px'}}/> 
            <button onClick={handleReset}>Reset</button>
           <Link to="/Foodzoneapp/login" ><button style={{margin:'1rem'}}>Go to login</button></Link>
      </div>
    </>
  );
}

export default Forgotpass;
