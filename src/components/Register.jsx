import React ,{useState} from "react";
import { Link } from "react-router-dom";
import Homecss from "./Home.module.css"
import Registercss from "./Register.module.css"; 
import { firebaseconfig } from "../firebaseConfig"; 

const Register = () => { 

  const[disable,setDisable] = useState('type')

  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[number,setNumber] = useState('')
  const[password,setPassword] = useState('') 

  const handleauth = async (e)=>{
    e.preventDefault();
     
    try{
      const user = await firebaseconfig.auth().createUserWithEmailAndPassword(email,password);
      if(user){
        alert("Registration successfully")
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
          <h2>FoodZone opened on 2023. We have 10 Restaurants and if we have any branch in your nearest area we can also deliver foods from your nearest Outlets through our online web-app </h2>
          <p>To order & book first Register then SignUp/Login to see all the features and you can also book-table for lunch/dinner in our Restaurant</p> 
        </div> 
         
      </div>
      {/* Container ends here */}
      <div className={Registercss.registercontainer}>
      <h3>This register page created using firestore-database you can register & login from here. But if you forgot password you can never reset your password because forgot function is not ready yet.</h3>
          <div className={Registercss.form}>
            
            <h2>Register</h2>
            <div className={Registercss.box}>
                <input type="text" placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="email" placeholder="Email id" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="number" placeholder="Phone no" value={number} onChange={(e)=>setNumber(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} /> 
                <button onClick={handleauth} disabled={name.length===0 || email.length===0 || number.length===0 ||  password.length===0 || disable==='registered'} >Register</button>
                <p style={{fontSize:'20px'}}>For database connection it is little-bit slow after click on register button Wait for 5-second there will be an alert then click ok then login</p>
                <p>Allready have an account? <Link to="/Foodzoneapp/login">Log-in</Link></p>
            </div>  
          </div>
      </div>
      
    </>
  );
};

export default Register;
