import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import test from './test.svg';
import './Style.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
class Testimoinals extends React.Component {

  render() {
    return (
      <Slider {...settings}>
        <div>
          <h3>Testimonials</h3>
          <img src={test} alt=''/>
          <p className='test-descrp'>“With Supply Change I now have
             a real shot at winning public contracts”</p>
          <small className='test-descrp'>-Kathy,Argonaut</small>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
};

export default Testimoinals;
