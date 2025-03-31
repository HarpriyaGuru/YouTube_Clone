import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { homeVideo } from "../../utiles/HomeMockdata"; // Assuming homeVideo is the mock data
import axios from "axios";
const HomePage = ({ sideNavbar }) => {
  const [data, setData] = useState([]);
  const options = [
    "All",
    "HTML",
    "CSS",
    "JavaScript",
    "Vue.js",
    "React.js",
    "Node.js",
    "HTML",
    "CSS",
    "JavaScript",
    "Vue.js",
    "React.js",
    "Node.js",
  ];

  useEffect(() => {
    axios
      .get("http://localhost:3000/videoApi/getvideo")
      .then((res) => {
        console.log("data", res.data.videos);
        setData(res.data.videos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // State to track the selected category
  const [selectedOption, setSelectedOption] = useState("All");

  // Function to handle option selection
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  // Filter videos based on the selected option
  const filteredVideos =
    selectedOption === "All"
      ? homeVideo
      : homeVideo.filter((video) =>
          video.description.toLowerCase().includes(selectedOption.toLowerCase())
        );

  return (
    <div className={sideNavbar ? "homePage" : "fullHomePage"}>
      <div className="homePage_options">
        {options.map((item, index) => (
          <div
            key={index}
            className={`homePage_option ${
              selectedOption === item ? "selected" : ""
            }`}
            onClick={() => handleOptionClick(item)}
          >
            {item}
          </div>
        ))}
      </div>

      <div
        className={sideNavbar ? "home_mainPage" : "home_mainPageWithoutLink"}
      >
        {/* {filteredVideos.length > 0 ? (
          filteredVideos.map((video, index) => (
            <Link key={index} to={`/watch/${video.videoId}`}>
              <div className="youtube_Video">
                <div className="youtube_thumbnailBox">
                  <img 
                    src={video.thumbnailUrl} 
                    alt="YouTube Thumbnail" 
                    className="youtube_thumbnailPic" 
                  />
                  <div className="youtube_timingThumbnail">{video.timing || '00:00'}</div>
                </div>

                <div className="youtubeTitleBox">
                  <div className="youtubeTitleBoxProfile">
                    <img 
                      src={video.uploaderProfileImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBFbCgb0ajYdgdzEXKZ3Kg7y1Lc3upM0IDg&s"} 
                      alt="User Profile" 
                      className="youtube_thumbnail_Profile"
                    />
                  </div>
                  <div className="youtubeTitleBox_Title">
                    <div className="youtube_videoTitle">{video.title}</div>
                    <div className="youtube_channelName">{video.uploader}'s Channel</div>
                    <div className="youtubeVideo_views">{video.views} views</div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="noVideosFound">
            <h2>No videos found for "{selectedOption}"</h2>
          </div>
        )} */}

        {data?.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/watch/${item._id}`}
              className="youtube_Video"
            >
              <div>
                <div className="youtube_thumbnailBox">
                  <img
                    src={item.thumbnail}
                    alt="YouTube Thumbnail"
                    className="youtube_thumbnailPic"
                  />
                  <div className="youtube_timingThumbnail">
                    {item.timing || "00:00"}
                  </div>
                </div>

                <div className="youtubeTitleBox">
                  <div className="youtubeTitleBoxProfile">
                    <img
                      src={
                        item?.user?.profilePic ||
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBFbCgb0ajYdgdzEXKZ3Kg7y1Lc3upM0IDg&s"
                      }
                      alt="User Profile"
                      className="youtube_thumbnail_Profile"
                    />
                  </div>
                  <div className="youtubeTitleBox_Title">
                    <div className="youtube_videoTitle">{item.title}</div>
                    <div className="youtube_channelName">
                      {item?.user?.channelName}'s Channel
                    </div>
                    <div className="youtubeVideo_views">{item.like} likes</div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
