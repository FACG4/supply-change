import React from 'react';

import Progress from './Progress';

import './style.css';

const arr =[
  { title: 'Business Information',
    img: '/images/info.svg' },
  { title: 'Upload logo',
    img: '/images/camera.svg' },
  { title: 'Social Impact',
    img: '/images/social-care.svg' },
  { title: 'Map',
    img: '/images/map.svg' },
  { title: 'Turnover',
    img: '/images/line-chart.svg' },
  { title: 'Policies',
    img: '/images/policy.svg' }
];

export default ({ activePageIndex }) => {
  return (
    <section className = 'ptracker__container'>
      <div className = 'ptracker__v-center ptracker__caution' >
        <img className = 'ptracker__caution-img' src = '/images/caution.svg' alt = 'caution'/>
        <p>Sorry! You need to complete your full information to get Started</p>
      </div>
      <div className = 'ptracker__step-container ptracker__v-center'>
        <div className = 'progress__container'>
          {arr.map((el,key) => <Progress title = {el.title} img = {el.img} key = {key} index = {key} activePageIndex = {activePageIndex} />)}
        </div>
        <div className = 'ptracker__steps-line'></div>
      </div>
    </section>
  );
};
