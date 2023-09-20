import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.css"

function SignupPage({users}) {

    const [user,setUser] = useState({
        name:"", phone:"", email:"",password:"", company: ""
    })

    const [error,setError] = useState("");
    const [success,setSuccess] = useState("");

    let {name,phone,email,password,company} = user;

    const navigate = useNavigate();

    function addUser(e){
        console.log(user);
        e.preventDefault();

        // validation:

        if(!name || !email || !password || !phone){
            setError("Please fill all the details")
            setSuccess("");
            return;
        }
        
        if(localStorage.getItem("users")){
            if(checkIfUserExist(email)){
                setError("Email already exists");
                setSuccess("");
            }
            else{
                saveUser(user);
            }

        }
        else{
            saveUser(user);
        }

    }

    function saveUser(){

        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);

        localStorage.setItem("users",JSON.stringify(users));

        setSuccess("Account Created Successfully")
        setError("");

        let userObj = {
            email,name
        }

        sessionStorage.clear();
        sessionStorage.setItem("userObj", JSON.stringify(userObj));

        setTimeout(()=>{
            navigate("/profile")
        },2000)
    }

    function checkIfUserExist(email){
        let users = JSON.parse(localStorage.getItem("users"));
        const obj = users.find((userObj)=>{
            return userObj.email===email;
        })

        if(obj){
            return true;
        }
        else{
            return false;
        }

    }


  return (
        <div id='signup-container'>

            <div>
                
                <h1>Create your <br></br> PopX account</h1>

                {
                    error && <h4 className="error">{error}</h4>
                }

                { 
                    success && <h4 className="success">{success}</h4>
                }

                <form className="signup-form" onSubmit={addUser}>

                    <div className='label'>Full Name<span style={{color: "red"}}>*</span></div>
                    <input type="text" id='name' placeholder="Marry Doe" className='inputs' onChange={(e)=>setUser({...user,name:e.target.value})}></input>
                    <div className='label'>Phone number<span style={{color: "red"}}>*</span></div>
                    <input type="tel" id="phone" name="phone" placeholder='Marry Doe' className='inputs' onChange={(e)=>setUser({...user,phone:e.target.value})}></input>
                    <div className='label'>Email address<span style={{color: "red"}}>*</span></div>
                    <input type="email" id='email' placeholder='Marry Doe' className='inputs' onChange={(e)=>setUser({...user,email:e.target.value})}></input>
                    <div className='label'>Password<span style={{color: "red"}}>*</span></div>
                    <input type="password" id='pass' placeholder='Marry Doe' className='inputs' onChange={(e)=>setUser({...user,password:e.target.value})}></input>
                    <div className='label'>Company name</div>
                    <input type='text' id='company' placeholder='Marry Doe' className='inputs' onChange={(e)=>setUser({...user,company:e.target.value})}></input>

                    <div style={{fontWeight: 600}}>Are you an Agency?<span style={{color: "red"}}>*</span></div>
                    <div className='radioBtn'>
                        <input type="radio" id="yes" name="confirm"></input>
                        <span style={{fontWeight: 500}}>Yes</span>
                        <input type="radio" id="no" name="confirm"></input>
                        <span style={{fontWeight: 500}}>No</span>
                    </div>

                    <div id='signup-btn-div'>
                        <button type="submit" className='signupBtn'>Create Account</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default SignupPage
