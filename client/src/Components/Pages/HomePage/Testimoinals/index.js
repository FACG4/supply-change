import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import test from './test.svg';
import './style.css';

class Testimoinals extends React.Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 4000
    };

    return (
      <div className='testimonials'>
        <h3>Testimonials</h3>
        <Slider {...settings}>
          <div>
            <img src='https://www.brandcrowd.com/gallery/brands/pictures/picture14471472909838.png' alt=''/>
            <p className='test-descrp'>“With Supply Change I now have
             a real shot at winning public contracts”</p>
            <small className='test-descrp'>-Kathy,Argonaut</small>
          </div>
          <div>
            <img src='https://cooloriginal.info/wp-content/uploads/2018/04/cleaning-company-logo-ideas-lovely-cleaning-service-logo-design-logo-design-louisas-cleaning-of-cleaning-company-logo-ideas.jpg' alt=''/>
            <p className='test-descrp'>“As a social enterprise, Supply Change gave us the opportunity to find and tender for public contracts.”</p>
            <small className='test-descrp'>-Katty,Arnut</small>
          </div>
          <div>
            <img src={test} alt=''/>
            <p className='test-descrp'>”We recommend all social enterprises to sign up on this site, it helped us grow”</p>
            <small className='test-descrp'>-Ana,Mosh</small>
          </div>
        </Slider>
      </div>
    );
  }
};

export default Testimoinals;
