import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import action from './action.js';

const CompanyAction = props => {
  const { businessName, avatarUrl, businessRole, handlelogout } = props;
  return (
    <div className=' companyAction'>
      <span className='companyAction__span'>
        <NavLink to='/profile'>
          <img className='companyAction__img' src={avatarUrl} alt='' />
        </NavLink>
        {businessName}
        <i className='fas fa-caret-down'></i>
      </span>
      <div className='companyAction-content' >
        <NavLink to='/profile'>
          <i className='fas fa-user'></i>Profile
        </NavLink>
        <NavLink to={`/contract/${action(businessRole).path}`}>
          <i className={action(businessRole).fontAwesome}></i>{action(businessRole).text} a contract
        </NavLink>
        <a onClick={() => handlelogout()}><i className='fas fa-sign-out-alt'></i>Logout</a>
      </div>
    </div>
  );
};
export default CompanyAction;
