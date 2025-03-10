import React from 'react';
import { FaHome, FaHistory, FaUser, FaFire, FaShoppingBag,
  FaMusic, FaFilm, FaBroadcastTower, FaGamepad, FaNewspaper, FaTrophy, FaGraduationCap, 
  FaTshirt, FaPodcast, FaCog, FaHistory as FaReportHistory, FaPlayCircle, FaChild, FaQuestionCircle, FaCommentDots } from 'react-icons/fa';
import { SiYoutubeshorts } from "react-icons/si";

const Sidebar = () => {
  return (
    <>
      <aside className="w-64 bg-white p-4 shadow-md h-screen overflow-y-auto">
        <ul className="space-y-2">
          <li className="p-2 flex items-center gap-3 text-gray-700">
            <FaHome /> Home
          </li>
          <li className="p-2 flex items-center gap-3 text-gray-700">
            <SiYoutubeshorts /> Shorts
          </li>
          <li className="p-2 flex items-center gap-3 text-gray-700">
            <FaFilm /> Subscriptions
          </li>
          <hr className='border-0.5 border-gray-300'/>
          <li className="p-2 flex items-center gap-3 text-gray-700">
            <FaUser /> You
          </li>
          <li className="p-2 flex items-center gap-3 text-gray-700">
            <FaHistory /> History
          </li>
          <hr className='border-0.5 border-gray-300' />

          <p className="text-sm text-gray-500 p-2">Sign in to like videos, comment, and subscribe.</p>
          <button className="border border-gray-300 px-4 py-2 rounded-full text-sm flex items-center gap-2 text-blue-700">
            <FaUser /> Sign in
          </button>
          <hr className='border-0.5 border-gray-300' />

          <p className="text-sm font-semibold p-2 text-black">Explore</p>
          <li className="p-2 flex items-center gap-3 text-gray-700">
            <FaFire /> Trending
          </li>
          <li className="p-2 flex items-center gap-3 text-gray-700">
            <FaShoppingBag /> Shopping
          </li>
          <li className="p-2 flex items-center gap-3 text-gray-700">
            <FaMusic /> Music
          </li>
          <li className="p-2 flex items-center gap-3 text-gray-700">
            <FaFilm /> Movies
          </li>
          <li className="p-2 flex items-center gap-3 text-gray-700">
            <FaBroadcastTower /> Live
          </li>
          <li className="p-2 flex items-center gap-3 text-gray-700">
            <FaGamepad /> Gaming
          </li>
          <li className="p-2 flex items-center gap-3 text-gray-700">
            <FaNewspaper /> News
          </li>
          <li className="p-2 flex items-center gap-3 text-gray-700">
            <FaTrophy /> Sports
          </li>
          <li className="p-2 flex items-center gap-3 text-gray-700">
            <FaGraduationCap /> Courses
          </li>
          <li className="p-2 flex items-center gap-3 text-gray-700">
            <FaTshirt /> Fashion & Beauty
          </li>
          <li className="p-2 flex items-center gap-3 text-gray-700">
            <FaPodcast /> Podcasts
          </li>
          <hr className='border-0.5 border-gray-200' />
          <p className="text-sm font-semibold p-2 text-black">More from YouTube</p>
          <li className="p-2 flex items-center gap-3 text-gray-700">
            <FaPlayCircle className="text-red-500" /> YouTube Premium
          </li>
          <li className="p-2 flex items-center gap-3 text-gray-700">
            <FaPlayCircle className="text-red-500" /> YouTube Music
          </li>
          <li className="p-2 flex items-center gap-3 text-gray-700">
            <FaChild className="text-red-500" /> YouTube Kids
          </li>
          <hr className='border-0.5 border-gray-300'
 />
          <li className="p-2 flex items-center gap-3 text-gray-700">
            <FaCog /> Settings
          </li>
          <li className="p-2 flex items-center gap-3 text-gray-700">
            <FaReportHistory /> Report history
          </li>
          <li className="p-2 flex items-center gap-3 text-gray-700">
            <FaQuestionCircle /> Help
          </li>
          <li className="p-2 flex items-center gap-3 text-gray-700">
            <FaCommentDots /> Send feedback
          </li>
          <hr className='border-0.5 border-gray-300'
 />
          <p className="text-xs text-gray-500 p-2">© 2025 Google LLC</p>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
