import React from 'react';
import './SideNavbar.css';
import HomeIcon from '@mui/icons-material/Home';
import VideocamIcon from '@mui/icons-material/Videocam';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MovieIcon from '@mui/icons-material/Movie';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Link } from 'react-router-dom';


const SideNavbar = ({sideNavbar}) => {
  return (
    <>
     {/* <div className={sideNavbar?"home-sideNavbar":"homeSideNavbarHide"} > */}
     <div className={sideNavbar?"home-sideNavbar":"homeSideNavbarHide"} > 
      {/* Top Section */}
      <div className="home_sideNavbarTop">
        <Link to={"/"} className="home_sideNavbarTopOption">
          <HomeIcon />
          <div className="home_sideNavbarTopOptionTitle">Home</div>
        </Link>
        <div className="home_sideNavbarTopOption">
          <VideocamIcon />
          <div className="home_sideNavbarTopOptionTitle">Shorts</div>
        </div>
        <div className="home_sideNavbarTopOption">
          <SubscriptionsIcon />
          <div className="home_sideNavbarTopOptionTitle">Subscription</div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="home_sideNavbarMiddle">
        <div className="home_sideNavbarTopOption">
          <div className="home_sideNavbarTopOptionTitle">You</div>
          <ChevronRightIcon />
        </div>
        <div className="home_sideNavbarTopOption">
          <HistoryIcon />
          <div className="home_sideNavbarTopOptionTitle">History</div>
        </div>
        <div className="home_sideNavbarTopOption">
          <PlaylistAddIcon />
          <div className="home_sideNavbarTopOptionTitle">Playlist</div>
        </div>
        <div className="home_sideNavbarTopOption">
          <SmartDisplayOutlinedIcon />
          <div className="home_sideNavbarTopOptionTitle">Your Videos</div>
        </div>
        <div className="home_sideNavbarTopOption">
          <WatchLaterOutlinedIcon />
          <div className="home_sideNavbarTopOptionTitle">Watch Later</div>
        </div>
        <div className="home_sideNavbarTopOption">
          <ThumbUpAltOutlinedIcon />
          <div className="home_sideNavbarTopOptionTitle">Liked Videos</div>
        </div>
        
      </div>

      {/* Subscription Section */}
      <div className="home_sideNavbarMiddle">
        <div className="home_sideNavbarTopOption">
          <div className="home_sideNavbarTopOptionTitleHeader">Subscription</div>
        </div>

        {/* Subscription Logos */}
        <div className="home_sideNavbarTopOption">
          <img 
            className="home_sideNavbar_ImgLogo" 
            src="https://www.medianews4u.com/wp-content/uploads/2020/04/Aaj-Tak-2.jpg" 
            alt="Aaj Tak" 
            loading="lazy"
          />
          <div className="home_sideNavbarTopOptionTitle">Aaj Tak</div>
        </div>

        <div className="home_sideNavbarTopOption">
          <img 
            className="home_sideNavbar_ImgLogo" 
            src="https://th.bing.com/th/id/R.bce6ed4af85677ce3b6908ac7e8e631b?rik=DFwXRhY0pZxYIg&pid=ImgRaw&r=0" 
            alt="The LallanTop" 
            loading="lazy"
          />
          <div className="home_sideNavbarTopOptionTitle">The LallanTop</div>
        </div>

        <div className="home_sideNavbarTopOption">
          <img 
            className="home_sideNavbar_ImgLogo" 
            src="https://th.bing.com/th/id/OIP.Ptvb889e_arCEj1IgCROgAHaHa?rs=1&pid=ImgDetMain" 
            alt="NDTV India" 
            loading="lazy"
          />
          <div className="home_sideNavbarTopOptionTitle">NDTV India</div>
        </div>
      </div>
      <div className="home_sideNavbarMiddle">
        <div className="home_sideNavbarTopOption">
        <div className="home_sideNavbarTopOptionTitleHeader">Explore</div>
        </div>
        <div className="home_sideNavbarTopOption">
          <LocalFireDepartmentIcon />
          <div className="home_sideNavbarTopOptionTitle">Trending</div>
        </div>
        <div className="home_sideNavbarTopOption">
          <ShoppingBagIcon />
          <div className="home_sideNavbarTopOptionTitle">Shopping</div>
        </div>
        <div className="home_sideNavbarTopOption">
          <MovieIcon />
          <div className="home_sideNavbarTopOptionTitle">Movies</div>
        </div>
        <div className="home_sideNavbarTopOption">
          <VideogameAssetIcon />
          <div className="home_sideNavbarTopOptionTitle">Gaming</div>
        </div>
        <div className="home_sideNavbarTopOption">
          <MusicNoteIcon />
          <div className="home_sideNavbarTopOptionTitle">Music</div>
        </div>
        
      </div>
      

    </div>
    </>
  );
};

export default SideNavbar;
