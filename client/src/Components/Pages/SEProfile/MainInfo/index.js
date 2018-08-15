import React from 'react';
import Group from './Imgs/Group.png';
import Place from './Imgs/Place.png';
import Team from './Imgs/Team.png';
import Vector from './Imgs/Vector.png';
import compUrl from './Imgs/compUrl.png';
import phoneCall from './Imgs/phoneCall.png';
import mail from './Imgs/mail.png';
import facebook from './Imgs/facebook.png';
import instagram from './Imgs/instagram.png';
import twitter from './Imgs/twitter.png';

import './style.css';

const mainInfo = props => {
  const { trade_type, location, employees_no, se_name, se_address, phone_number, se_description, logo_link } = props;

  return (
    <div className='contanier'>
      <div className='heading'>
        <h2>
        Preview of your Profile
        </h2>
      </div>

      <div className='mainInfo'>
        <div className='allBoxesDiv'>
          <div className='boxDiv'>
            <div className='icon_div'>
              <img src={Group} alt=''/>
            </div>
            <div className='text_div'>
              <ul>
                <li className='infoType'>Service</li>
                <li className='infoReply'>{trade_type}</li>
              </ul>
            </div>
          </div>
          <div className='boxDiv'>
            <div className='icon_div'>
              <img src={Place} alt=''/>
            </div>
            <div className='text_div'>
              <ul>
                <li className='infoType'>Location</li>
                <li className='infoReply'>{location}</li>
              </ul>
            </div>
          </div>
          <div className='boxDiv'>
            <div className='icon_div'>
              <img src={Team} alt=''/>
            </div>
            <div className='text_div'>
              <ul>
                <li className='infoType'>Team Size
                </li>
                <li className='infoReply'>{employees_no}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='comInformation'>
        <div>
          <figure>
            <img src={logo_link} alt='' className='companyLogo'/>
            <figcaption>{se_name}</figcaption>
          </figure>
        </div>

        <div className='listItems'>
          <div className='listItemsInfo'>
            <ul >
              <li>
                <img src={Vector}/>
                <span>{se_address}</span>
              </li>
              <li>
                <img src={compUrl}/>
                <span>www.example.com</span>
              </li>
              <li>
                <img src={phoneCall}/>
                <span>{phone_number}</span>
              </li>
              <li>
                <img src={mail}/>
                <span>example@example.com</span>
              </li>
            </ul>
          </div>
          <div className='socialMedia'>
            <ul >
              <li><img src={facebook}/></li>
              <li><img src={instagram}/></li>
              <li><img src={twitter}/></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='lineDiv'></div>
      <div className='comDescription'>
        <h3 className='h2CompanyD'>Company Description</h3>
        <div className='descriptionTextDiv'>
          <div className='descriptionText'>
            <p>
              {se_description}
            </p>
          </div>
        </div>
      </div>
    </div>);
};

export default mainInfo;
