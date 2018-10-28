import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HeroSection from './HeroSection';
import HomeHeader from './HomeHeader';
import HowItWork from './HowItWork';
import Testimoinals from './Testimoinals';
import Supported from './Supported';

class HomePage extends Component {
  render() {
    return (
      <div >
        <HomeHeader />
        <HeroSection />
        <HowItWork />
        <Testimoinals />
        <Supported />

      </div>
    );
  }
}

export default HomePage;
