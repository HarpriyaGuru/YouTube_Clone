import React, { useState } from 'react';
import "./SignUp.css";
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [signUpField, setSignUpField] = useState({
    channelName: "",
    userName: "",
    password: "",
    about: "",
    profilePic: "",
  });
  const [uploadImageUrl, setUploadImageUrl] = useState(
    "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid"
  );
  const [isLoading, setIsLoading] = useState(false);  // Loading state

  function handleInputField(event, name) {
    setSignUpField({
      ...signUpField,
      [name]: event.target.value,
    });
  }

  async function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function validateForm() {
    const { channelName, userName, password, about } = signUpField;
    if (!channelName || !userName || !password || !about) {
      toast.error("All fields must be filled!");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return false;
    }
    return true;
  }

  const handleSignUp = async () => {
    try {
      const res = await axios.post(`https://localhost:5173/auth/signup`, signUpField);
      console.log("res", res); // Handle the response from the API
    } catch (err) {
      console.log("error-->", err); // Handle errors from the API
    }
  };
  

  return (
    <div className="signUp">
      <div className="signup_card">
        <div className="signUp_title">
          <YouTubeIcon sx={{ fontSize: "54px" }} className="login_youtubeImage" />
          SignUp
        </div>

        <div className="signUp_Inputs">
          <input
            className="signUp_Inputs_inp"
            type="text"
            placeholder="Channel Name"
            value={signUpField.channelName}
            onChange={(e) => handleInputField(e, "channelName")}
          />
          <input
            className="signUp_Inputs_inp"
            type="text"
            placeholder="UserName"
            value={signUpField.userName}
            onChange={(e) => handleInputField(e, "userName")}
          />
          <input
            className="signUp_Inputs_inp"
            type="password"
            placeholder="Password"
            value={signUpField.password}
            onChange={(e) => handleInputField(e, "password")}
          />
          <input
            className="signUp_Inputs_inp"
            type="text"
            placeholder="About Your Channel"
            value={signUpField.about}
            onChange={(e) => handleInputField(e, "about")}
          />

          <div className="image_upload_signup">
            <button>
              <input
                type="file"
                className="signUpBtn"
                onChange={handleImageUpload}
              />
            </button>
            <div className="image_upload_signup_div">
              <img
                className="image_default_signUp"
                src={uploadImageUrl}
                alt="userImg"
              />
            </div>
          </div>

          <div className="signUpBtns">
            <div className="signUpBtn" onClick={handleSignUp}>
              {isLoading ? "Signing Up..." : "SignUp"} {/* Conditional rendering */}
            </div>
            <Link to="/" className="signUpBtn">
              Home
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
