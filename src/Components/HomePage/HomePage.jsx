import React from 'react'
import "./HomePage.css"
const HomePage = ({sideNavbar}) => {
  const options = ["All", "Twenty20 Cricket", "Music", "Live", "Mixes", "Gaming", "Debates", "Coke Studio", "Democracy", "Comedy","Live", "Mixes", "Gaming", "Debates"];

  return (
    <div className={sideNavbar?'homePage':'fullHomePage'}>
      <div className="homePage_options">
        
        {
          options.map((item,index)=>{
            return (
              <div key={index}className="homePage_option">
                {item}
            </div>
            )
          })
        }
      </div>

    <div className="home_mainPage">
      <div className="youtube_Video">
        <div className="youtube_thumbnailBox">
          <img src="https://ihitthebutton.com/wp-content/uploads/2023/04/youtube-thumbnail-size-1.jpg" alt="thumbnail" className="youtube_thumbnailPic" />
          <div className="youtube_timingThumbnail">22:34</div>
        </div>

        <div className="youtubeTitleBox">
          <div className="youtubeTitleBoxProfile">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBFbCgb0ajYdgdzEXKZ3Kg7y1Lc3upM0IDg&s" alt="Profile" className='youtube_thumbnail_Profile'/>
          </div>
        </div>




      </div>
    </div>
    </div>
  )
}

export default HomePage
