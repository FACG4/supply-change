import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';

import './style.css';

const Error=() => {

  return (
    <div className='error_page_cntnt'>
      <h2>
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </h2>
      <h3>Sorry, This Page Isn&#900;t available :(</h3>
      <NavLink to='/'>Go Back To Home Page</NavLink>

    </div>
  );
};

export default Error;
