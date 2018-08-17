import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './style.css';

const convert = str => str.replace(/"/g, '').replace(/{|}/g,'').split(',');

const workPlaces = props => {
  const { places } = props;
  const regions = convert(places);
  return (
    <div className='placesMainDiv'>
      <h3 className='h3'>Places that we can work at:</h3>
      <div className='PlacesToWork'>
        <div className='spanTextsContainer'>
          {regions.map(region => {
            return (
              <div className = 'spanText'>
                <span>{ region }</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className='browseBtnDiv'>
        <a className='no-line' href='/contract/find'><button type='button' claasName='btn'>Browse Contracts</button></a>
      </div>
    </div>
  );
};

export default workPlaces;
