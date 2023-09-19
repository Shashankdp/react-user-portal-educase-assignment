import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.css"

function LoginPage() {

    const [user,setUser] = useState({
        name:"", email:"", password:""
    })

    const [error,setError] = useState("");
    const [success,setSuccess] = useState("");

    let {email,password} = user;

    const navigate = useNavigate();


    function userLogin(e){
           e.preventDefault();

           // validation:

           if(!email || !password){
               setError("Please fill all the details")
               setSuccess("");
               return
           }
           
           if(localStorage.getItem("users")){
              const userExist = checkIfUserExist(email);
                if(userExist!==""){
                    setSuccess("Logged in successfully");
                    setError("");

                    console.log(userExist);

                    let userObj = userExist;
            
                    sessionStorage.clear();
                    sessionStorage.setItem("userObj", JSON.stringify(userObj));

                    setTimeout(()=>{
                        navigate("/profile")
                    },2000)
                }
                else{
                    setError("Account not found")
                    setSuccess("");
                }
            }
            else{
                setError("Account not found")
                setSuccess("");
            }
    }

    function checkIfUserExist(email){
        let users = JSON.parse(localStorage.getItem("users"));
        const obj = users.find((userObj)=>{
            return userObj.email===email;
        })

        // console.log(obj);
        

        if(obj){
           return obj;
        }
        else{
            return "";
        }

    }


  return (

    <div id='login-container'>
        <h1>Signin to your <br></br> PopX account</h1>
        <p style={{paddingBottom:"1rem"}}>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit,</p>

        {
            error && <h4 className="error">{error}</h4>
        }

        { 
            success && <h4 className="success">{success}</h4>
        }

        <form onSubmit={userLogin}>
            <div className='label'>Email address</div>
            <input type="email" id='email' placeholder='Enter email address' className='inputs' onChange={(e)=>setUser({...user,email:e.target.value})}></input>

            <div className='label'>Password</div>
            <input type="password" id='pass' placeholder='Enter password' className='inputs' onChange={(e)=>setUser({...user,password:e.target.value})}></input>
            
            <button className='loginBtn'>Login</button>
        </form>
    </div>
  )
}

export default LoginPage
