import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './style.css';

import first from './imgs/first.png';
import second from './imgs/second.png';
import third from './imgs/third.png';
import fourth from './imgs/fourth.png';
import fifth from './imgs/fifth.png';

const Supported =() => {

  return (
    <div className='supported'>
      <div className='supported__heading'>
        <h1>We are kindly supported By</h1>
        <div className='line__header'></div>
      </div>

      <div className='imgs__box'>

        <div className='second'>
          <div className='img__second'>
            <img src={ second } alt='img__second' />
          </div>
        </div>

        <div className='first'>
          <div className='img__first'>
            <img src={ first } alt='img__first' />
          </div>
        </div>

        <div className='third'>
          <div className='img__third'>
            <img src={ fourth } alt='img__third' className='supported__img' />
          </div>
        </div>

        <div className='fourth'>
          <div className='img__fourth'>
            <img src={ third } alt='img__fourth' />
          </div>

        </div>
        <div className='fifth'>
          <div className='img_fifth'>
            <img src={ fifth } alt='img_fifth' />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Supported;
