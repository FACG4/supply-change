import React, { Component } from 'react';
import './App.css';
// import Footer from './CommonComponents/Footer';
import Testimoinals from './Pages/HomePage/Testimoinals';
import HowItWork from './Pages/HomePage/HowItWork';
import HomeHeader from './Pages/HomePage/HomeHeader';
import HeroSection from './Pages/HomePage/HeroSection';
class App extends Component {
  render() {
    return (
      <React.Fragment>

        <div className='App'>
          <HomeHeader />
          <HeroSection />
          <HowItWork />
          <Testimoinals/>
          {/* <Footer /> */}

        </div>

      </React.Fragment>
    );
  }
}

export default App;
