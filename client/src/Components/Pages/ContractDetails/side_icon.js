import React from 'react';

export default ({ fontAwesomeClass, sideTitle, fillInfo}) => {
  return (
    <div className='contract__right-details'>
      <div className='contract__right-info-icon'>
        <i className={fontAwesomeClass}></i>
      </div>
      <div className='contract__right-info-spec'>
        <ul className='no-list'>
          <li>{sideTitle}</li>
          <li>{fillInfo}</li>
        </ul>
      </div>
    </div>
  );
};