import React, { Component ,useState,location} from 'react'
import './Login.css';
import logo from '../image/IHistopathology-Logo.png'; 
import img from '../image/IHistopathology-Logo-White.png'; 
import $ from 'jquery'
import {Link, useLocation } from 'react-router-dom'
import { validEmail,validPassword } from './../Regex/Regex';



export  function Login() {
  const location = useLocation()
  const { name, emal, pass} = location.state;

  
  const[email,setemail]=useState('');
  const[password,setpassword]=useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const validate = () => {
      if (!validEmail.test(email)) {
         setEmailErr(true);
      }
      if (!validPassword.test(password)) {
         setPwdError(true);
      }
   };

  function test(){
    if(email===emal&&pass==password){
      console.log(name);
      $(".signInContainer").hide(500,function(){
        $(".WelcomeContainer").show(500);
      });
    }
    else{
      console.log("no");
    }
    
  }

  return <>
  <div className="w-50 mx-auto my-5 all signInContainer justify-content-center align-items-center ">
    <div className="container text-center">
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <div className='m-auto '>
            <div>
              <p className='text-white fs-3' >welcome Back </p>
            </div>
            <div >
              <img src={img} className='w-75' alt="" />
            </div>
          </div>
         
        </div>
        <div className="col-md-8 p-4 m-auto">
          <div className='logo mb-2'>

          <img src={logo} className='w-50'/>
          </div>
          <p className='text-muted fs-6 fw-bold'>login in to your IHistopathology account</p>
         
            <div className="name m-2">
            <input type="email" className='form-control w-75 m-auto' placeholder='Email' name="emailinput" id="email"value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            </div>
           
            <div className="password m-2">
            <input type="password" className='form-control w-75 m-auto' placeholder='Password' name="passwordinput" id="password" value={password}  onChange={(e)=>{setpassword(e.target.value)}} />
            
            </div>
            {emailErr && <p>Your email is invalid</p>}
            {pwdError && <p>Your password is invalid</p>}
            <div className="button m-2">
              <button onClick={()=>test()} className='sign w-75'>login in</button>
            
            </div>

            
          <p>Dont have acount?<Link to='/'>Signup</Link></p>

          <p className='ptext'>or Login </p>
          <div className="icons">
              <i className="fa-brands fa-google-plus-g"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-linkedin-in"></i>
          </div>
          
        </div>
      </div>
    </div>
  </div>

  <div className="w-75 h-75 mx-auto my-5  WelcomeContainer text-center   ">
        
                <div>
                    <p className=' fs-3 w-100' >welcome Back </p>
                </div>
                
               
    </div>
  
 
  
  
  
  </> 
}
