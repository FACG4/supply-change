import React from 'react';
import logo from './logo.svg';
import './style.css';

const Footer = () => (<div>
  <footer className='footer'>
    <div className='contact-inf'>
      <img className='logo' src={logo} alt=''/>
      <br/>
      <small>
        18 London Ln
      </small>
      <br/>
      <small>
        E8 3PR London
      </small>
      <br/>
      <small>
        hello@supplychange.co.uk
      </small>
      <br/>
    </div>
    <div className='journey'>
      <p id='follow'>Follow your journey</p>
      <div className='labeld-input'>
        <input placeholder='Enter your email'/>
        <i className='fas fa-envelope'/>
      </div>
      <div className='socail-media'>
        <a href='https://twitter.com/_SupplyChange' onClick='https://twitter.com/_SupplyChange' className='fab fa-twitter'/>
        <small className='tw-account'>: @_SupplyChange</small>
      </div>
    </div>
  </footer>
</div>);

export default Footer;
