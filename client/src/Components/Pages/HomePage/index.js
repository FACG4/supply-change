import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import HeroSection from './HeroSection';
import HomeHeader from './HomeHeader';
import HowItWork from './HowItWork';
import Testimoinals from './Testimoinals';

class HomePage extends Component {
  render() {
    return (
      <div >
        <HomeHeader />
        <HeroSection />
        <HowItWork />
        <Testimoinals />

      </div>
    );
  }
}

export default HomePage;
