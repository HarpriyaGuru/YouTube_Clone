# YouTube Clone Using MERN Stack

# Project Overview
This project is a YouTube clone application built using the MERN stack (MongoDB, Express, React, Node.js). The app allows users to register, log in, watch videos, comment on videos, create channels, and manage their videos, much like YouTube. The front-end is developed with React, while the back-end is built with Node.js and Express. Data is stored in a MongoDB database, and authentication is managed using JWT (JSON Web Tokens).

# Features
1. Home Page:

A grid of video thumbnails displaying the title, channel name, and view count.

Search and filter functionality to find videos based on title or category.

Sidebar navigation with various video categories.

2. User Authentication:

Register and log in users using JWT authentication.

After logging in, the user's name is displayed at the top.

3. Video Player Page:

A page that displays a video player, title, description, and like/dislike buttons.

Users can comment on videos, and new comments are saved to the database.

4. Channel Page:

Users can create and manage channels.

Users can upload, edit, and delete their videos on their channel page.

5. Responsive Design:

Fully responsive across devices (desktop, tablet, mobile).

# Tech Stack
1. Frontend:React.js,React Router,Axios for HTTP requests

2. Backend:Node.js,Express.js,JWT for authentication

3. Database:

MongoDB (MongoDB Atlas or local instance)

# Installation
1. Clone the Repository
   git clone https://github.com/yourusername/youtube-clone.git
   cd youtube-clone

2. Set Up Front-End (React)
Navigate to the client directory and install dependencies:
 cd client
npm install

3. Set Up Back-End (Node.js + Express)
Navigate to the server directory and install dependencies:
  cd server
npm install

5. Run the Application
    
    Start the backend and frontend:

For the backend (Node.js + Express):

   For the frontend (React):

   npm run dev

# The application will now be running at http://localhost:5173 (for React) and http://localhost:3000 (for the backend).



# Usage
1. Sign Up / Login:

Visit the homepage and click on the "Sign In" button to sign up or log in.

After successful authentication, your username will appear at the top, and you will be redirected to the homepage.

2. Watch Videos:

Browse the grid of videos on the homepage. Click on a video to watch it.

Like/dislike the video and comment in the comment section.

3. Create a Channel:

If you're logged in, you can create a new channel.

Once created, you can upload, edit, and delete videos from your channel.

4. Search & Filter Videos:

Use the search bar to filter videos based on title.

Use category filters to view videos from different categories (e.g., "Trending," "Music").

