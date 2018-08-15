import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import './style.css';
import logo from './logo.svg';

const HomeHeader = () => {
  const info = JSON.parse(localStorage.getItem('userInfo'));
  const options =info ? {
    path: '/profile',
    text: 'Profile'
  } : {
    path: '/login',
    text: 'Login'
  };
  return (
    <header>
      <div className='navBar'>
        <div className='logoDiv'>
          <img src={logo} alt=''/>
        </div>
        <div className='textNavBar'>
          <NavLink to='/contract/post'>Post a contract</NavLink>
          <span>|</span>
          <NavLink to='/about'>About</NavLink>
          <span>|</span>
          <NavLink to={options.path}>{options.text}</NavLink>
        </div>
      </div>
    </header>);
};

export default HomeHeader;
