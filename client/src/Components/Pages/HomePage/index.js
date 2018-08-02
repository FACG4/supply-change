
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import HeroSection from './HeroSection';
import HomeHeader from './HomeHeader';
import HowItWork from './HowItWork ';
import Testimoinals from './Testimoinals ';
import './style.css';

class Result extends Component {
  render() {

    return (
      <main
        id='main'>
        <HomeHeader />
        <HeroSection />
        <HowItWork />
        <Testimoinals />
      </main>
    );
  }
}

export default Result;
