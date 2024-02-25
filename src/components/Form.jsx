import React, { useState } from 'react' 
import Navbar from "./Navbar";
import Footer from './Footer';
import Formcss from './Form.module.css' 
function Form() {
  // const history = useNavigate()
  const[disable,setDisable] = useState('type')
  const [user,setUser]  = useState(
    {
      Name: '' , Email:'', Number:'',Date:'', Member:'', Select:''
    }
  )
  let name,number,date, value
  console.log(user)
  const data = (e)=>
  {
    
    name = e.target.name;
    value = e.target.value;
    number = e.target.number;
    value = e.target.value;
    date = e.target.date;
    value = e.target.value;
    setUser({...user, [name]:value});   
  }
  
  const getdata = async (e)=>
  {
    const {Name , Email, Number,Date, Member,Select} = user;
    e.preventDefault();
    const options = {
      method: 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Name , Email, Number,Date, Member, Select
      })
    }
    const res = await fetch(
      'https://reactfirebase-e5089-default-rtdb.firebaseio.com/UserData.json',
      options
    )
    console.log(res)
    if(res){
      alert("Booking done")
      // history("/Foodzoneapp/blog")
    }
    else{
      alert("Error")
    }
  }


  return (
    <> 

        <div className={Formcss.form}>
        <Navbar/>
          
            <div className={Formcss.container}>
                <form method='POST' >
                    <label for="name">Your name:</label>
                    <input type="text" name='Name' placeholder='Your name' value={user.Name} autoComplete='off' required onChange={data} />
                    <label for="email">Your Email:</label>
                    <input type="text" name='Email' placeholder='Valid Email id' value={user.Email} autoComplete='off' required onChange={data} />
                    <label for="phone">Phone no:</label>
                    <input type="number" name='Number' placeholder='Valid Phone no' value={user.Number} autoComplete='off' required onChange={data} />

                    <label for="date">Which date:</label>
                    <input type="date" name='Date'  value={user.Date} autoComplete='off' required onChange={data} />

                    <label for="member">For how many members you want to book:</label>
                    <input type="number" name='Member' placeholder='How many member' value={user.Member} autoComplete='off' required onChange={data} />  
                    <label for="restaurants">Choose the restaurant where you want to book a table:</label>
                    <select name="Select" value={user.Select} autoComplete='off' required onChange={data} >
                        <option value="Select the branch">Select the branch</option>
                        <option value="Kolkata">Kolkata branch</option>
                        <option value="Mumbai">Mumbai branch</option>
                        <option value="Delhi">Delhi branch</option>
                        <option value="Darjeeling">Darjeeling branch</option>
                        <option value="Srinagar">Srinagar branch</option>
                        <option value="Pune">Pune branch</option>
                        <option value="Goa">Goa branch</option>
                        <option value="Manali">Manali branch</option>
                        <option value="Shimla ">Shimla branch</option>
                        <option value="Sikkim">Sikkim branch</option>
                    </select>
                    <button onClick={getdata}  disabled={user.Name.length===0 || user.Email.length===0 || user.Number.length===0 || user.Date.length===0 || user.Member.length===0 || user.Select.length===0 || disable==='submitted'}>Submit</button>
                </form>

            </div>
        </div>

      <Footer/>
    </>
  )
}

export default Form
