import React from 'react'
import {FaHome, FaHistory, FaUser,  FaFilm} from 'react-icons/fa';
import { SiYoutubeshorts } from "react-icons/si";


const Hamburger = () => {
  return (
    <div className='w-24 bg-white p-4  h-screen'>
      <ul className="space-y-2">
                <li className="p-2 flex flex-col items-center gap-3 text-gray-700 text-sm ">
                  <FaHome /> Home
                </li>
                <li className="p-2 flex flex-col items-center gap-3 text-gray-700 text-sm">
                  <SiYoutubeshorts /> Shorts
                </li>
                <li className="p-2 flex flex-col items-center gap-3 text-gray-700 text-sm">
                  <FaFilm /> Subscriptions
                </li>
               <li className="p-2 flex flex-col items-center gap-3 text-gray-700 text-sm">
                  <FaUser /> You
                </li>
                <li className="p-2 flex flex-col items-center gap-3 text-gray-700 text-sm">
                  <FaHistory /> History
                </li>
      </ul>
    </div>
  )
}

export default Hamburger
