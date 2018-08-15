import React from 'react';

import SideIcon from './side_icon';
import Map from './map';
import Button from '../../CommonComponents/Button';

const ContractPage = props => {

  if (props.details) {
    const {
      title,
      category,
      contract_description,
      value,
      created_at,
      start_date,
      company_logo,
      company_name,
      contract_region } = props.details;

    const { lat, lon } = props;

    return (
      <section className='container__body'>
        <div className='contract__container'>
          <div className='contract__title'>{title}</div>
          <section className='contract__details'>
            <div className='contract__left-description'>
              <div className='contract__spec'>
                <h2>Description</h2>
                <p>{contract_description}</p>
                <div className='contract__spec--download'>
                  <i className='far fa-file-pdf'></i>
                            &nbsp;
                  <a href='#'>Download Specification</a>
                </div>
              </div>
              <div className='contract__regions'>
                <h2>Location</h2>
                <div className='contract__regions--city'>
                  <h4>{contract_region}</h4>
                  <Map lat={lat} lon={lon}/>
                </div>
              </div>
            </div>

            <div className='contract__right-info'>
              <div className='contract__logo'>
                <img src={company_logo} alt='logo' />
                <h3 className='contract__companyname'>{company_name}</h3>
              </div>

              <div className='contract__right-details-container'>
                <SideIcon fontAwesomeClass='fa fa-calendar' sideTitle='Date Posted:' fillInfo={created_at.split('T')[0]} />
                <SideIcon fontAwesomeClass='fa fa-th-large' sideTitle='Category:' fillInfo={category} />
                <SideIcon fontAwesomeClass='fas fa-dollar-sign' sideTitle='Value:' fillInfo={value} />
              </div>
              <Button onClick={props.sendMsg}>Apply Now</Button>
            </div>
          </section>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default ContractPage;