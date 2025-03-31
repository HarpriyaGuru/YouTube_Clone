import React, { useState } from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import AddIcon from '@mui/icons-material/Add';

import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link,useNavigate } from 'react-router-dom';
import Login from '../Login/Login';

const Navbar = ({ setSideNavbarFunc, sideNavbar }) => {
  const [userPic, setUserPic] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/434px-Unknown_person.jpg");
  const [navbarModal, setNavbarModal] = useState(false);
  const navigate = useNavigate();
  const [login,setLogin]=useState(false)
  
  // login
  function onclickOfPopOption(button){
    setNavbarModal(false)
    if(button=="login"){
      setLogin(true);
    }else{
      
    }
  }
  function setLoginModel(){
    setLogin(false)
  }
  // --login

  function handleProfile(){
    navigate("/user/123");
    setNavbarModal(false)
  }

  function handleClickModal() {
    setNavbarModal(prev => !prev);
  }

  const sideNavbarFunc = () => {
    setSideNavbarFunc(!sideNavbar);
  };

  // Close modal if clicked outside of the modal (click-away behavior)
  const handleClickOutside = (e) => {
    if (e.target.classList.contains('navbar-modal')) {
      setNavbarModal(false);
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbarHamberger" onClick={sideNavbarFunc}>
            <MenuIcon sx={{ color: "white" }} />
          </div>
          <Link to="/" className="navbar_youtubeImg">
            <YouTubeIcon sx={{ fontSize: "34px" }} className='navbar_youtubeImage' />
            <div className='navbar_utubeTitle'>YouTube</div>
          </Link>
        </div>

        <div className="navbar-middle">
          <div className="navbar_searchBox">
            <input type="text" placeholder='Search' className='navbar_searchBoxInput' />
          </div>
          <div className="navbar_searchIconBox">
            <SearchIcon sx={{ fontSize: "28px", color: "white" }} />
          </div>

          <div className="navbar_mike">
            <KeyboardVoiceIcon sx={{ color: "white" }} />
          </div>
        </div>

        <div className="navbar-right">
          {/* <VideoCallIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} /> */}
          <Link to={"/12/upload"}>
          <button className='btn'><AddIcon sx={{ color: 'white' }}/>Create</button>
         </Link>
          <NotificationsIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
          <img onClick={handleClickModal} src={userPic} className='navbar-right-logo' alt="Logo" />

          {navbarModal && (
            <div className="navbar-modal" onClick={handleClickOutside}>
              <div className="navbar-modal-option" onClick={handleProfile}>Profile</div>
              <div className="navbar-modal-option" onClick={()=>{onclickOfPopOption("logout")}}>Logout</div>
              <div className="navbar-modal-option" onClick={()=>{onclickOfPopOption("login")}}>Login</div>
            </div>
          )}
        </div>
       {
        login && <Login setLoginModel={setLoginModel} />
       }
      </div>
    </>
  );
}

export default Navbar;
