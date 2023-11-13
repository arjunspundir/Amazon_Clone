import React from 'react'
import './ComponentStyle/Login.css'
import amazon from './Images/amazon2.webp'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='login'>
       <Link to='/'> <span className='loginth'><img src={amazon} alt="amazon" />.in</span></Link>
        <div className='formBox'>
          <form action="#" className='form'>
          <h1>Sign in</h1>
          Email or phone number <br />
          <input type="email" /><br />
          <button className='btn'>Continue</button><br />
          <div className='terms'>By Continue you agree to Amazon's <a href="#">Terms and Conditions</a> and <a href="#">Privacy Notice </a><br />
          </div><a  href="#"><span className='help'>Need Help ? </span></a>
        </form>
        </div>
        <div className="divide"><span className='hr'>-------------------</span> New to amazon ? <span className='hr'>-------------------</span></div>
        <button className='btn2'>Create your account</button>
        <div><span className='hr'><hr /></span></div>
       <div className='last'> <a href="#">Conditions of Use </a><a href="#">Privacy Notes </a><a href="#">Help</a></div>
      <div className="copyright"> Copyright! All rights reserved by Arjun Singh</div>
    </div>
  )
}

export default Login
