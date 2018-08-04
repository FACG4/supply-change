import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';

import './style.css';

class Contract extends Component {

  render() {
    const {
      company_logo,
      title,
      company_name,
      created_at,
      contract_description
    } = this.props.contract;
    return (
      <div className='contract-single'>
        <div className='organizationAvatar'>
          <img className='organizationAvatar__img' src={company_logo} alt='' />
        </div>
        <div className='contractInfo col'>
          <div className='contract-title'>
            <h3 className='contract-title__heading'>{title}</h3>
          </div>
          <div className='organizationName'>
            <h4 className='organizationName__heading'>{company_name}</h4>
            <Moment className='organizationName__time' format='YYYY/MM/DD'>
              {created_at}
            </Moment>
          </div>
          <div className='contract-desc'>
            <p className='contract-desc__paragraph'>{contract_description}</p>
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
