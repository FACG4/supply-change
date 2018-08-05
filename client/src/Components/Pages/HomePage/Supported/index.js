import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import first from './imgs/first.png';
import second from './imgs/second.png';
import third from './imgs/third.png';
import fourth from './imgs/fourth.png';

const Supported =() => {
  return (
    <div className='supported'>
      <div className='supported__heading'>
        <h2>Supported By</h2>
        <div className='line__header'></div>
      </div>

      <div className='imgs__box'>

        <div className='second'>
          <div className='img__second'>
            <img src={ second } alt='' />
          </div>
        </div>

        <div className='first'>
          <div className='img__first'>
            <img src={ first } alt='' />
          </div>
        </div>

        <div className='third'>
          <div className='img__third'>
            <img src={ fourth } alt='' className='supported__img' />
          </div>
        </div>

        <div className='fourth'>
          <div className='img__fourth'>
            <img src={ third } alt='' />
          </div>
        </div>

      </div>

    </div>
  );
};

export default Supported;
