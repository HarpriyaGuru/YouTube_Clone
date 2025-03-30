import React, { useState } from 'react';
import "./Login.css";
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";

const Login = ({ setLoginModel }) => {
  const [loginField, setLoginField] = useState({ "userName": "", "password": "" });

  function handleOnChangeInput(event, name) {
    setLoginField({
      ...loginField, [name]: event.target.value
    });
  }
  console.log(loginField);
  
  return (
    <div className='login'>
      <div className="login_card">
        <div className="titleCard_login">
          <YouTubeIcon sm={{ fontSize: "54px" }} className='login_youtubeImage' />
          Login
        </div>

        <div className="loginCredentials">
          <div className="userNameLogin">
            <input
              className='userNameLoginUserName'
              placeholder='Username'
              type="text"
              value={loginField.userName}
              onChange={(e) => handleOnChangeInput(e, "userName")}
            />
          </div>
          <div className="userNameLogin">
            <input
              className='userNameLoginUserName'
              placeholder='Password'
              type="password"
              value={loginField.password}
              onChange={(e) => handleOnChangeInput(e, "password")}
            />
          </div>
        </div>

        <div className="login_buttons">
          <button className="login-btn">Login</button>
          <Link to="/signup" className="login-btn">
            SignUp
          </Link>
          <button className="login-btn" onClick={() => setLoginModel()}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
