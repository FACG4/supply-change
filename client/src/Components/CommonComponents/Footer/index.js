import React from 'react';
import './Style.css';
import logo from './logo.svg';

const Footer = () => (
  <div>

    <footer className="footer">

      <div className="contact-inf">
        <img src={logo} alt="" />
        <br />
        <small>
Collin Street West, Victor 8007, London
          {' '}
        </small>
        <br />
        <small>
+1 246-345-0695
        </small>
        <br />
        <small>
hello@supplychange.co.uk
        </small>
        <br />
      </div>
      <div className="journey">
        <p id="follow">
Follow your journey
          {' '}
        </p>
        <input placeholder="Enter your email" />
        <div className="socail-media">
          <i className="fab fa-facebook-f" />
          <i className="fab fa-twitter" />
          <i className="fab fa-instagram" />
        </div>


      </div>


    </footer>

  </div>
);

export default Footer;
