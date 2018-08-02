import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import './Style.css';
import logo from './logo.svg';

const HomeHeader = () => (
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
        <NavLink to='/login'>login</NavLink>
      </div>
    </div>
  </header>);

export default HomeHeader;
