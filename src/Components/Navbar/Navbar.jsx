import React,{useState} from 'react'
import './Navbar.css'
// import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
//  import MoreVertIcon from '@mui/icons-material/MoreVert';
//  import PersonIcon from '@mui/icons-material/Person';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Navbar = () => {
  const [userPic,setUserpic]=useState("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/434px-Unknown_person.jpg")
  return (
    <>
     <div className="navbar">
     <div className="navbar-left">
        <div className="navbarHamberger" >
          <MenuIcon sx={{color:"white"}} />
        </div>
        <div className="navbar_youtubeImg">
        <YouTubeIcon sx={{ fontSize: "34px" }} className='navbar_youtubeImage' />
        <div className='navbar_utubeTitle'>YouTube</div>
        </div>
        </div>
      <div className="navbar-middle">
        <div className="navbar_searchBox">
          <input type="text" placeholder='Search' className='navbar_searchBoxInput' />
        </div>
        <div className="navbar_searchIconBox">
        <SearchIcon sx={{fontSize:"28px", color:"white"}}/>
        </div>

         <div className="navbar_mike">
          <KeyboardVoiceIcon sx={{ color: "white" }} />
          </div>
      </div>
     
      <div className="navbar-right">
        {/* <MoreVertIcon sx={{ color: "white" ,cursor:"pointer",fontSize:"30px"}}/> */}
        <VideoCallIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
        <NotificationsIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
      <img src={userPic} className='navbar-right-logo' alt="Logo" />
      <div className="navbar-modal">
        <div className="navbar-modal-option">Profile</div>
        <div className="navbar-modal-option">Logout</div>
        <div className="navbar-modal-option">Login</div>
      </div>
       
       </div>
      </div>
     
    </>
  )
}

export default Navbar
