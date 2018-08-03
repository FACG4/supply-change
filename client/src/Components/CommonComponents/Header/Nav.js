import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import action from './action.js';
import CompanyAction from './CompanyAction.js';

const Nav = props => {
  const { avatarUrl, businessRole, handlelogout, isLogin } = props;
  return (
    <ul className='nav'>
      <li className='item'>
        <NavLink to='/howitwork'>How it works</NavLink>
      </li>
      <li className='item'>
        <NavLink to='/about'>About us</NavLink>
      </li>
      <li className='item'>
        <div className='post_find_Contract'>
          <NavLink to={action(businessRole).path}>
            {action(businessRole).text} a contract
          </NavLink>
        </div>
      </li>
      <li className='item' >
        { isLogin ?(
          <CompanyAction { ...props }/>
        ):(
          <NavLink to='/login'>Login<i className='fas fa-sign-in-alt'></i></NavLink>
        )}
      </li>
    </ul>
  );
};
export default Nav;
