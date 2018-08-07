import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import test from './test.svg';
import './style.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
class Testimoinals extends React.Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
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
            <p className='test-descrp'>“as a social enterprise  company, supply change gave us the power and opportunity to find and submit for public organizations contracts ”</p>
            <small className='test-descrp'>-Katty,Arnut</small>
          </div>
          <div>
            <img src={test} alt=''/>
            <p className='test-descrp'>”We recommend all social enterprises to sign up on this site, it helped us to grow up”</p>
            <small className='test-descrp'>-Ana,Mosh</small>
          </div>
        </Slider>
      </div>
    );
  }
};

export default Testimoinals;
