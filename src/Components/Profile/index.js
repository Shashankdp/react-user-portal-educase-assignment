import React from 'react'
import "./style.css"

function Profile() {
  
  const obj = JSON.parse(sessionStorage.getItem("userObj"));
  console.log(obj);

  return (
    <div id='profile-container'>
        <div id='account'>Account Setting</div>
        <div className='userInfo'>
             <img src='https://png.pngitem.com/pimgs/s/226-2267516_male-shadow-circle-default-profile-image-round-hd.png'></img>
             <div className='userDetails'>
                <h3>{obj.name}</h3>
                <p>{obj.email}</p>
             </div>
        </div>
        <p style={{paddingLeft: "1rem", paddingTop: "1rem"}}>Lorem Ipsum Dolor Sit Amet, consetetur Sadipscing<br></br>Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut<br></br>Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
    </div>
  )
}

export default Profile;