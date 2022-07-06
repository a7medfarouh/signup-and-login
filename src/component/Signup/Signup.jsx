import React, { Component ,useState} from 'react'
import logo from '../image/IHistopathology-Logo.png'; 
import img from '../image/IHistopathology-Logo-White.png'; 
import './Signup.css';
import { Link } from 'react-router-dom';
import { validEmail,validPassword } from './../Regex/Regex';


export  function Signup() {
  
  const[userName,setuserName]=useState('');
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
 
 
  return  <>
  <div className="w-50 mx-auto my-5 all d-flex justify-content-center align-items-center ">
    <div className="container text-center">
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <div className='m-auto '>
            <div>
              <p className='text-white fs-3' >welcome to </p>
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
          <p className='text-muted fs-6 fw-bold'>Sign up and start learning</p>
          
            <div className="name m-2">
              <input type="text" className='form-control w-75 m-auto'  placeholder='name' name="nameinput" id="name" value={userName}onChange={(e)=>{setuserName(e.target.value)}}/>
            </div>
            <div className="email m-2">
              <input type="email" className='form-control w-75 m-auto' placeholder='Email' name="emailinput" id="email"value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            </div>
            <div className="password m-2">
              <input type="password" className='form-control w-75 m-auto' placeholder='Password' name="passwordinput" id="password" value={password}  onChange={(e)=>{setpassword(e.target.value)}} />
            
            </div>
            {emailErr && <p>Your email is invalid</p>}
            {pwdError && <p>Your password is invalid</p>}
            <div className="button m-2">
              <button className='sign w-75'><Link to="login" state={{ name: userName, emal: email, pass: password}} className="text-decoration-none text-white">sign up</Link></button>
              
            </div>

            
            
          
          <p>already have an account?<Link to='login'>login in</Link></p>

          <p className='signtext'>or create account with </p>
          <div className="icons">
              <i className="fa-brands fa-google-plus-g"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-linkedin-in"></i>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  
 
  
  
  
  </> 
}



