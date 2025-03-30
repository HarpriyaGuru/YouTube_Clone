import React from 'react';
import { Home, History, Person, Subscriptions, Shorts } from '@mui/icons-material';

import './Hamburger.css'; // Importing the custom CSS file

const Nav = () => {
  return (
    <div className='hamburger-container'>
      <ul className='hamburger-list'>
        <li className='hamburger-item'>
          <Home className='hamburger-icon' /> Home
        </li>
        <li className='hamburger-item'>
          <Shorts className='hamburger-icon' /> Shorts
        </li>
        <li className='hamburger-item'>
          <Subscriptions className='hamburger-icon' /> Subscriptions
        </li>
        <li className='hamburger-item'>
          <Person className='hamburger-icon' /> You
        </li>
        <li className='hamburger-item'>
          <History className='hamburger-icon' /> History
        </li>
      </ul>
    </div>
  );
};

export default Nav;
