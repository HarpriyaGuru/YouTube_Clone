import React, { useState } from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './VideoUpload.css';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';


const VideoUpload = () => {
  const [inputField, setInputField] = useState({ "title": "", "description": "", "videoLink": "", "thumbnail": "", "videoType": "" })

  function handleInputField(event,name){
    setInputField({
       ...inputField,[name]:event.target.value
    })
   }

  return (
    
      <div className="videoUpload">
        <div className="uploadBox">
            <div className="uploadVideoTitle">
                <YouTubeIcon sx={{fontSize:"54px",color:"red"}} />
                 Upload Video
            </div>
            <div className="uploadForm">
            <input value={inputField.title} onChange={(e)=>{handleInputField(e,"title")}} type="text" placeholder='Enter title of video..' className='uploadFormInputs' />
            <input value={inputField.description} onChange={(e)=>{handleInputField(e,"description")}}type="text" placeholder='Enter description' className='uploadFormInputs' />
            <input value={inputField.videoType} onChange={(e)=>{handleInputField(e,"videoType")}} type="text" placeholder='Enter Category' className='uploadFormInputs' />
             <div>Thumbnail <input type="file" accept='image/*' /></div>
             <div>Video <input type="file" accept='video/mp4, video/webm, video/*' /></div>
            </div>
            <div className="uploadBtns">
                <div className="uploadBtn-form">Upload</div>
                <Link to={"/"}
                 className="uploadBtn-form">Home</Link>
          
            </div>
        </div>
      </div>
  
  )
}

export default VideoUpload
