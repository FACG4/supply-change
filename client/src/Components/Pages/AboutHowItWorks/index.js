import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import data from './aboutHowItWorksData';

import './style.css';

const AboutHowItWorks = ({ target }) => {
  const info = JSON.parse(localStorage.getItem('userInfo'));
  const id =info ? 'main' : null;
  return (
    <div id ={id}>
      <div className='aboutUs'>
        <div className='aboutUs__heading'>
          <h1>{data[target].heading}</h1>
        </div>
        <div className='aboutUs__body'>
          {data[target].paragrapghs.map((paragrapgh,index) => (
            <p key={index}>{paragrapgh}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutHowItWorks;
