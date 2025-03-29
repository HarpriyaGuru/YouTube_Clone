import React from 'react';
import "./HomePage.css";
import { Link } from 'react-router-dom';


const HomePage = ({ sideNavbar }) => {
  const options = [
    "All", "Twenty20 Cricket", "Music", "Live", "Mixes", "Gaming", 
    "Debates", "Coke Studio", "Democracy", "Comedy"
  ];

  return (
    <div className={sideNavbar ? 'homePage' : 'fullHomePage'}>
      <div className="homePage_options">
        {options.map((item, index) => (
          <div key={item} className="homePage_option">
            {item}
          </div>
        ))}
      </div>

      <div className={sideNavbar?"home_mainPage":"home_mainPageWithoutLink"}>
       <Link to="/watch/12">
        <div className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img 
              src="https://ihitthebutton.com/wp-content/uploads/2023/04/youtube-thumbnail-size-1.jpg" 
              alt="YouTube Thumbnail" 
              className="youtube_thumbnailPic" 
            />
            <div className="youtube_timingThumbnail">22:34</div>
          </div>           

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBFbCgb0ajYdgdzEXKZ3Kg7y1Lc3upM0IDg&s" 
                alt="User Profile" 
                className="youtube_thumbnail_Profile"
              />
            </div>
            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">USER1</div>
              <div className="youtube_channelName">User1 Channel</div>
              <div className="youtubeVideo_views">3k likes</div>
            </div>
          </div>
        </div>
        </Link>

        <div className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img 
              src="https://ihitthebutton.com/wp-content/uploads/2023/04/youtube-thumbnail-size-1.jpg" 
              alt="YouTube Thumbnail" 
              className="youtube_thumbnailPic" 
            />
            <div className="youtube_timingThumbnail">22:34</div>
          </div>
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBFbCgb0ajYdgdzEXKZ3Kg7y1Lc3upM0IDg&s" 
                alt="User Profile" 
                className="youtube_thumbnail_Profile"
              />
            </div>
            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">USER1</div>
              <div className="youtube_channelName">User1 Channel</div>
              <div className="youtubeVideo_views">3k likes</div>
            </div>
          </div>
        </div>


        <div className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img 
              src="https://ihitthebutton.com/wp-content/uploads/2023/04/youtube-thumbnail-size-1.jpg" 
              alt="YouTube Thumbnail" 
              className="youtube_thumbnailPic" 
            />
            <div className="youtube_timingThumbnail">22:34</div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBFbCgb0ajYdgdzEXKZ3Kg7y1Lc3upM0IDg&s" 
                alt="User Profile" 
                className="youtube_thumbnail_Profile"
              />
            </div>
            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">USER1</div>
              <div className="youtube_channelName">User1 Channel</div>
              <div className="youtubeVideo_views">3k likes</div>
            </div>
          </div>
        </div>


        <div className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img 
              src="https://ihitthebutton.com/wp-content/uploads/2023/04/youtube-thumbnail-size-1.jpg" 
              alt="YouTube Thumbnail" 
              className="youtube_thumbnailPic" 
            />
            <div className="youtube_timingThumbnail">22:34</div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBFbCgb0ajYdgdzEXKZ3Kg7y1Lc3upM0IDg&s" 
                alt="User Profile" 
                className="youtube_thumbnail_Profile"
              />
            </div>
            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">USER1</div>
              <div className="youtube_channelName">User1 Channel</div>
              <div className="youtubeVideo_views">3k likes</div>
            </div>
          </div>
        </div>



        <div className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img 
              src="https://ihitthebutton.com/wp-content/uploads/2023/04/youtube-thumbnail-size-1.jpg" 
              alt="YouTube Thumbnail" 
              className="youtube_thumbnailPic" 
            />
            <div className="youtube_timingThumbnail">22:34</div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBFbCgb0ajYdgdzEXKZ3Kg7y1Lc3upM0IDg&s" 
                alt="User Profile" 
                className="youtube_thumbnail_Profile"
              />
            </div>
            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">USER1</div>
              <div className="youtube_channelName">User1 Channel</div>
              <div className="youtubeVideo_views">3k likes</div>
            </div>
          </div>
        </div>


        <div className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img 
              src="https://ihitthebutton.com/wp-content/uploads/2023/04/youtube-thumbnail-size-1.jpg" 
              alt="YouTube Thumbnail" 
              className="youtube_thumbnailPic" 
            />
            <div className="youtube_timingThumbnail">22:34</div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBFbCgb0ajYdgdzEXKZ3Kg7y1Lc3upM0IDg&s" 
                alt="User Profile" 
                className="youtube_thumbnail_Profile"
              />
            </div>
            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">USER1</div>
              <div className="youtube_channelName">User1 Channel</div>
              <div className="youtubeVideo_views">3k likes</div>
            </div>
          </div>
        </div>


        <div className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img 
              src="https://ihitthebutton.com/wp-content/uploads/2023/04/youtube-thumbnail-size-1.jpg" 
              alt="YouTube Thumbnail" 
              className="youtube_thumbnailPic" 
            />
            <div className="youtube_timingThumbnail">22:34</div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBFbCgb0ajYdgdzEXKZ3Kg7y1Lc3upM0IDg&s" 
                alt="User Profile" 
                className="youtube_thumbnail_Profile"
              />
            </div>
            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">USER1</div>
              <div className="youtube_channelName">User1 Channel</div>
              <div className="youtubeVideo_views">3k likes</div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default HomePage;
