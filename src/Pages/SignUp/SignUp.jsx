import React, { useState } from 'react'
import "./SignUp.css"
import YouTubeIcon from '@mui/icons-material/YouTube';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [singUpFiled, setSignUpField] = useState({ "channelName": "", "userName": "", "password": "", "about": "", "profilePic": "" });
    const [uploadImageUrl,setUploadImageUrl]=useState("https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid" )

    function handleInputField(event,name){
     setSignUpField({
        ...singUpFiled,[name]:event.target.value
     })
    }

  return (
    <div className='signUp'>
       <div className="signup_card">
        <div className="signUp_title">
           <YouTubeIcon sx={{fontSize:"54px"}} className='login_youtubeImage'/>
        SignUp
        </div>

        <div className="signUp_Inputs">
            <input className='signUp_Inputs_inp' type="text" placeholder='Channel Name' value={singUpFiled.channelName} onChange={(e)=>{handleInputField(e,"channelName")}}/>
            <input className='signUp_Inputs_inp' type="text" placeholder='UserName' value={singUpFiled.userName} onChange={(e)=>{handleInputField(e,"userName")}}/>
            <input className='signUp_Inputs_inp' type="password" placeholder='Password' value={singUpFiled.password} onChange={(e)=>{handleInputField(e,"password")}}/>
            <input className='signUp_Inputs_inp' type="text" placeholder='About Your Channel' value={singUpFiled.about} onChange={(e)=>{handleInputField(e,"about")}}/>

            <div className="image_upload_signup">
               <button><input type="file" className="signUpBtn" /></button> 
                <div className="image_upload_signup_div">
                    <img className="image_default_signUp" src={uploadImageUrl} alt="userImg" />
                </div>       
            </div>
            {/* </div> */}
            <div className="signUpBtns">
                    <div className="signUpBtn">SignUp</div>
                    <Link to={"/"} className="signUpBtn">Home</Link>

                </div>

        </div>
       </div>

    </div>
  )
}

export default SignUp
