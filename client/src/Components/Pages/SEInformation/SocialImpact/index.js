import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Fontawesome from 'react-fontawesome';
import Group1 from './Imgs/Group1.png';

class SocialImpact extends Component {
  render() {
    return (
      <div className='socialImpact__mainDiv'>
        <div className='socialImpact__heading'>
          <h3 >
             Social Impact
          </h3>
        </div>

        <div className='form__field'>
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

          <div className='checkBox'>
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
