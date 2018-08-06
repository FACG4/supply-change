import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Fontawesome from 'react-fontawesome';
import Select from './../../../CommonComponents/Select';
import Group1 from './Imgs/Group1.png';

const array = [
  {
    label: 'employment',
    value: 'employment'
  },
  {
    label: 'disability support',
    value: 'disability support'
  },
  {
    label: 'mental health and wellbeing',
    value: 'mental health and wellbeing'
  },
  {
    label: 'poverty premium',
    value: 'poverty premium'
  },
  {
    label: 'digital inclusion',
    value: 'digital inclusion'
  },
  {
    label: 'financial inclusion' ,
    value: 'financial inclusion'
  },
  {
    label: 'youth employment' ,
    value: 'youth employment'
  },
  {
    label: 'community regeneration ',
    value: 'community regeneration'
  }
];

class SocialImpact extends Component {
  render() {
    return (
      <div className='socialImpact__mainDiv'>
        <div className='socialImpact__heading'>
          <h3 >
             Social Impact
          </h3>
        </div>

        <div className='h3__socialImpact'>
          <h3>
            What is the main focus of your social mission?
          </h3>
        </div>

        <div className='selectCityDiv'>
          <Select options={ array } placeholder='Select your mission' />
        </div>

        <div className='form__field select__impact'>
          <textarea id='DescriptionOfTheCompany ' type='text' name='DescriptionOfTheCompany' className='text__area' placeholder='Description of the company' required />
        </div>

        <div className='space__mainDiv'>
          <div className='spaceDiv__img' />
          <img src={Group1} alt='' className='space__img' />
          {/* <Fontawesome name="address-card-o" /> */}
        </div>

        <div className='SocialImpactDiv'>
          <div className='textDiv'>
            <p>
              Social impact is very important to us. Select any of the following that apply to you.
            </p>
          </div>

          <div className='checkbox'>
            <input id='mailingList' type='checkbox' name='mailingList' value='mailingList' />
            <span className='checkBoxSpan'>
               We are a not for profit , we invest our profits into
            </span>
            <br />
            <input id='T&C' type='checkbox' name='T&C' value='T&C' checked />
            <span className='checkBoxSpan'>
              X% or more of our staff are from a disadvantaged background
              or ask : What percentage of your employees?
            </span>
            <br />
            <input id='T&C' type='checkbox' name='T&C' value='T&C' checked />
            <span className='checkBoxSpan'>
              CSR Policy, we invest x% of our profits in the local community
            </span>
          </div>
        </div>

        <div className='form__field SaveBtn'>
          <input type='submit' className='button' value='Save & Continue' />
        </div>

      </div>
    );
  }
}

export default SocialImpact;
