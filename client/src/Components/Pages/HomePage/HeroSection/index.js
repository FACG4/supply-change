import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import './style.css';

const HeroSection = () => (
  <div className='hero-section'>
    <div className='supplyChange'></div>
    <div className='content-wrp'>
      <h1 className='description'>Supply change
      </h1>
      <p > We connect social enterprises to
        <br/>
       public sector contracts to help them
        <br/>
        drive impact in their local
          communities.</p>
      <NavLink to='/about' className='findMore'>Find out more!</NavLink>
    </div>
  </div>
);
export default HeroSection;
