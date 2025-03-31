import React, { useState,useEffect } from 'react';
import "./Video.css";
import Navbar from '../../Components/Navbar/Navbar';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Video = () => {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([
    { user: "UserName", date: "30-03-2025", text: "my comment 1" }
  ]);
  const [subscribed, setSubscribed] = useState(false);
  const [data,setData]=useState(null);
  const {id}=useParams();
  const [videoUrl,setVideoURL]=useState("");
  // console.log("id:",id);
  useEffect(()=>{
    fetchVideoById();
  },[])
  const fetchVideoById=async()=> {
    await axios.get(`http://localhost:3000/videoApi/getbyid/${id}`).then(res=>{console.log(res.data.videos
    );
      setData(res.data.videos
      )
      setVideoURL(res?.data?.videos?.videoLink)
    }).catch(err=>{console.log(err);
    })
  }
  // Handle adding a comment
  const handleAddComment = () => {
    if (comment.trim()) {
      setCommentsList([...commentsList, { user: "Current User", date: new Date().toLocaleDateString(), text: comment }]);
      setComment(""); // Clear comment input after submission
    }
  };

  // Handle cancel button click
  const handleCancelComment = () => {
    setComment(""); // Clear the comment input
  };

  // Toggle subscribe status
  const handleSubscribe = () => {
    setSubscribed(!subscribed);
  };

  return (
    <>
      <Navbar />
      <div className='video'>
        <div className="videoPostSection">
          <div className="video_youtube">
         {
         data &&  <video src={videoUrl} className='video_youtube_video' controls autoPlay width={"400px"} />
          }
          </div>

          <div className="video_youtubeAbout">
            <div className="video_uTubeTitle">
              {data?.title}
            </div>

            <div className="youtube_video_ProfileBlock">
              <div className="youtube_video_ProfileBlock_left">
                <Link to={`/user/${data?.user._id}`} className="youtube_video_ProfileBlock_left_img">
                  <img src="https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?semt=ais_hybrid" alt="pic" className='youtube_video_ProfileBlock_left_image' />
                </Link>
                <div className="youtubeVideo_subView">
                  <div className="youtubePostProfileName">
                    {"User 1"}
                  </div>
                  <div className="youtubePostProfileSubs">
                    {"28-03-2025"}
                  </div>
                </div>
                <div className="subscribeBtnYoutube" onClick={handleSubscribe}>
                  {subscribed ? "Unsubscribe" : "Subscribe"}
                </div>
              </div>

              <div className="youtube_video_likeBlock">
                <div className="youtube_video_likeBlock_Like">
                  <ThumbUpOutlinedIcon />
                  <div className="youtube_video_likeBlock_NoOfLikes">{320}</div>
                </div>
                <div className="youtubeVideoDivider"></div>
                <div className="youtube_video_likeBlock_Like">
                  <ThumbDownAltOutlinedIcon />
                  <div className="youtube_video_likeBlock_NoOfLikes">{3}</div>
                </div>
              </div>
            </div>

            <div className="youtube_video_About">
              <div>28-03-2025</div>
              <div>This is code video</div>
            </div>

            <div className="youtubeCommentSection">
              <div className="youtubeCommentSectionTitle">{commentsList.length} comments</div>

              <div className="youtubeSelfComment">
                <img src="https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?semt=ais_hybrid" alt="userpic" className='video_youtubeSelfCommentProfile' />
                <div className="addAComment">
                  <input
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    type="text"
                    className='addAcommentInput'
                    placeholder='Add a comment'
                  />
                  <div className="cancelSubmitComment">
                    <div className="cancelComment" onClick={handleCancelComment}>Cancel</div>
                    <div className="cancelComment" onClick={handleAddComment}>Comment</div>
                  </div>
                </div>
              </div>

              <div className="youtubeOthersComments">
                {commentsList.map((comment, index) => (
                  <div key={index} className="youtubeSelfComment">
                    <img src="https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?semt=ais_hybrid" alt="userpic" className='video_youtubeSelfCommentProfile' />
                    <div className="others_commentSection">
                      <div className="others_commentSectionHeader">
                        <div className="channelName_comment">
                          {comment.user}
                        </div>
                        <div className="commentTimingOthers">
                          {comment.date}
                        </div>
                      </div>
                      <div className="otherCommentSectionComment">
                        {comment.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="videoSuggestions">
          <div className="videoSuggestionsBlock">
            <div className="video_suggetion_thumbnail">
              <img src="https://img.freepik.com/free-photo/baseball-players-professional-baseball-stadium-evening-game_654080-1532.jpg?semt=ais_hybrid" className='video_suggetion_thumbnail_img' />
            </div>
            <div className="video_suggetions_About">
              <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
              <div className="video_suggetions_About_Profile">Cricket 320</div>
              <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
            </div>
          </div>

          <div className="videoSuggestionsBlock">
            <div className="video_suggetion_thumbnail">
              <img src="https://img.freepik.com/free-photo/baseball-players-professional-baseball-stadium-evening-game_654080-1532.jpg?semt=ais_hybrid" className='video_suggetion_thumbnail_img' />
            </div>
            <div className="video_suggetions_About">
              <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
              <div className="video_suggetions_About_Profile">Cricket 320</div>
              <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
            </div>
          </div>

          <div className="videoSuggestionsBlock">
            <div className="video_suggetion_thumbnail">
              <img src="https://img.freepik.com/free-photo/baseball-players-professional-baseball-stadium-evening-game_654080-1532.jpg?semt=ais_hybrid" className='video_suggetion_thumbnail_img' />
            </div>
            <div className="video_suggetions_About">
              <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
              <div className="video_suggetions_About_Profile">Cricket 320</div>
              <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
            </div>
          </div>

          <div className="videoSuggestionsBlock">
            <div className="video_suggetion_thumbnail">
              <img src="https://img.freepik.com/free-photo/baseball-players-professional-baseball-stadium-evening-game_654080-1532.jpg?semt=ais_hybrid" className='video_suggetion_thumbnail_img' />
            </div>
            <div className="video_suggetions_About">
              <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
              <div className="video_suggetions_About_Profile">Cricket 320</div>
              <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
