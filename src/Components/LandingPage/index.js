import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./style.css"

function LandingPage() {

    const navigate = useNavigate();


  return (
    <div className='landing-popup'>
       <div>
          <h2 style={{marginBottom:0}}>Welcome to PopX</h2>
          <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit,</p>
          <button className="btn signupBtn" onClick={()=>navigate("/signup")}>Create Account</button>
          <button className='btn loginBtn' onClick={()=>navigate("/login")}>Already Registered? Login</button>
       </div>
    </div>
  )
}

export default LandingPage