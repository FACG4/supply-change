import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import './style.css';

const HowItWork = () => (
  <React.Fragment>
    <div className='section-how-work'>
      <h1> How it works</h1>
      <p > Do you work for a public sector organisation
        <br/>
        and want to drive more social value through your supply chain?</p>
      <p>Post upcoming contracts on Supply Change and find outstanding
        <br/> Social Suppliers that ncrease impact in your local communities.</p>
      <h1>Sign up today</h1>
      <div className='select-signup'>
        <button className='homepage__button'><NavLink to='/signup'>
          <p className='link__text1'> I am a Social Enterprise</p>
        </NavLink> </button>
        <button className='homepage__button'> <a href='javascript:;' ><p className='link__text2'>I am a Public Sector Organisation</p></a> </button>
      </div>
    </div>

  </React.Fragment>

);

export default HowItWork;
