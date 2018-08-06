import React from 'react';

import './style.css';

const Policy = props => {

  return (
    <div>
      <div className = 'topForm'>
        <h3 className = 'title'>Health & Safety policy</h3>
      </div>
      <div className = 'policy'>
        <h3 className = 'policy__title' >Please detail what accreditations and qualifications your company possesses in respect of the scope of your trade.</h3>
        <div className='_box _tick'>
          <div className = 'cell'>
            <label htmlFor = 'policy-1'>
              <input type = 'checkbox' name = 'policy' value = '1' id = 'policy-1' />
              <span className = 'tick'></span>
                - Do you have a Health & Safety Policy?
            </label>
          </div>
          <div className = 'cell'>
            <label htmlFor = 'policy-2'>
              <input type = 'checkbox' name = 'policy' value = '2' id = 'policy-2' />
              <span className='tick'></span>
                - Do you have a Safety Schemes in Procurement (SSIP) accreditation?
            </label>
          </div>
          <div className = 'cell'>
            <label htmlFor = 'policy-3'>
              <input type = 'checkbox' name = 'policy' value = '3' id = 'policy-3' />
              <span className = 'tick'></span>
                - Do you have an equality & diversity policy?
            </label>
          </div>
          <div className = 'cell'>
            <label htmlFor = 'policy-4'>
              <input type = 'checkbox' name = 'policy' value = '4' id =' policy-4' />
              <span className = 'tick'></span>
                - Do you have a CSR / Environmental policy?
            </label>
          </div>
          <div className = 'cell'>
            <label htmlFor = 'policy-5'>
              <input type = 'checkbox' name = 'policy' value = '5' id = 'policy-5' />
              <span className = 'tick'></span>
                - Do you have a Data Protection Policy?
            </label>
          </div>
          <div className = 'cell'>
            <label htmlFor = 'policy-6'>
              <input type = 'checkbox' name = 'policy' value = '6' id = 'policy-6' />
              <span className = 'tick'></span>
                - Do you have a quality assurance certification relevant to the trade you registered for? (e.g ISO 9001:2000)
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
