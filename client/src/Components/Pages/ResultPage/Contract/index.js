import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Contract extends Component {
  render() {
    return (
      <div className='contract-single'>
        <div className='organizationAvatar'>
          <img className='organizationAvatar__img' src='https://upload.wikimedia.org/wikipedia/commons/6/62/USPHS_Commissioned_Corps_insignia.png' alt='' />
        </div>
        <div className='contractInfo col'>
          <div className='contract-title'>
            <h3 className='contract-title__heading'>Cleaning House</h3>
          </div>
          <div className='organizationName'>
            <h4 className='organizationName__heading'>Ramy Company</h4>
            <time className='organizationName__time' >10:22 PM</time>
          </div>
          <div className='contract-desc'>
            <p className='contract-desc__paragraph'>Lud exercitation ullamco laboris nisilla pariaturunt mollit animamco laboris nisilla laboris nisilla pariaturunt mollit animamco laboris nisilla laboris nisilla pariaturunt mollit animamco laboris nisilla pariaturunt mollit animamco laboris nisilla pariaturunt mollit anim id est laborum.</p>
          </div>
          <div className='contractAction'>
            <a href='#' className='contractAction__link' title=''>Read More <i className='fas fa-long-arrow-alt-right'></i></a>
          </div>
        </div>
      </div>

    );
  }
}

export default Contract;
