import React from 'react';
import './Style.css';
import logo from './logo.svg';
const HomeHeader = () => (<header>
  <div className='navBar'>
    <div className='logoDiv'>
      <img src={logo} alt=''/>
    </div>
    <div className='textNavBar'>
      <a>Post a contract</a>
      <span>|</span>
      <a>About</a>
      <span>|</span>
      <a>Log in</a>
    </div>
  </div>
</header>);

export default HomeHeader;
