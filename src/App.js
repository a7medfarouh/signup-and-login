import React, { Component } from 'react'
import { Login } from './component/Login/Login';
import { Signup } from './component/Signup/Signup';
import {Routes,Route} from 'react-router-dom';




export class App extends Component {
  render() {
    return <>
        
        <Routes>
            
          <Route  path='/' element={<Signup/>} exact />
          <Route  path='Signup' element={<Signup/>} exact />
          <Route  path='login' element={<Login/>} exact />
          
        </Routes>
        
       
        </>
    
  }
}
