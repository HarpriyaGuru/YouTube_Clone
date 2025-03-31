import express from 'express';
import mongoose from 'mongoose';
import AuthRoutes from './Routes/user.routes.js';
import VideoRoutes from './Routes/video.routes.js';
import CommentRoutes from './Routes/comment.routes.js';
// import dotenv from 'dotenv';
// dotenv.config();

import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser())
import cors from "cors";

app.use(cors({
  origin: 'http://localhost:5173', // Your React app's URL
  credentials: true
}))


// Middleware to parse JSON requests
app.use(express.json());

// Use routes
app.use('/auth', AuthRoutes);
app.use('/videoApi', VideoRoutes);
app.use('/comment', CommentRoutes);


// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// MongoDB connection
mongoose
  .connect('mongodb://localhost:27017/Backend')
  .then(() => console.log('DB connection successful!'))
  .catch((err) => console.log(err));