import Video from '../Model/video.model.js';
import mongoose from 'mongoose';

export const videoUpload = async (req, res) => {
    try {
        const { title, description, videoLink, thumbnail, videoType } = req.body;
        const videoUpload = new Video({
            user: req.user._id,
            title,
            description,
            videoLink,
            thumbnail,
            videoType
        });

        await videoUpload.save();
        res.status(201).json({ success: 'true', videoUpload });

        console.log(req.user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
};

export const GetAllVideo = async (req, res) => {
    try {
        const videos = await Video.find().populate('user', 'title thumbnail user createdAt');
        res.status(200).json({ success: "true", videos });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
};
export const GetVideoById = async (req, res) => {
    try {
      // Extract the video ID from the request parameters
      const { id } = req.params;
  
      // Validate the ID format (check if it's a valid MongoDB ObjectId)
      if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({ error: 'Invalid video ID format' });
      }
  
      // Fetch the video by its ID
      const video = await Video.findById(id);
  
      // If the video is not found, return a 404 error
      if (!video) {
        return res.status(404).json({ error: 'Video not found' });
      }
  
      // Return the video data in the response
      return res.status(200).json({
        success: true,
        video: video
      });
  
    } catch (error) {
      // Catch any errors and return a 500 status with the error message
      return res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  };
  export const getAllVideoByUserId = async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Validate if the userId is a valid MongoDB ObjectId
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ error: 'Invalid user ID format' });
      }
  
      // Find all videos associated with the userId
      const videos = await Video.find({ user: userId })
        .populate('user', 'title thumbnail user createdAt') // Populate the user details
        .sort({ createdAt: -1 }); // Optionally sort videos by creation date (most recent first)
  
      // If no videos are found
      if (videos.length === 0) {
        return res.status(404).json({ error: 'No videos found for this user' });
      }
  
      // Return the videos with a success message
      return res.status(200).json({
        success: true,
        videos, // Returning the videos array
        count: videos.length // Optionally include the count of videos returned
      });
  
    } catch (error) {
      // Handle errors and respond with a generic message
      return res.status(500).json({
        error: error.message || 'Internal Server Error'
      });
    }
  };