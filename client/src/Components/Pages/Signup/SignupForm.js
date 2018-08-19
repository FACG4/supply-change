import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Group1 from './Imgs/Group1.png';
import Fontawesome from 'react-fontawesome';
import FormInput from './FormInput';
import Checkbox from './Checkbox';

export default ({ handleChange, visible, error, error2, isCompany, submitForm, companyInfo }) => {
  const arr = [
    { type: 'text',
      name: 'businessName',
      placeholder: 'Business Name',
      value: companyInfo.company_name,
      required: true,
      finame: 'briefcase'
    },
    { type: 'text',
      name: 'firstName',
      placeholder: 'First Name',
      value: null,
      min: null,
      required: true,
      finame: 'user'
    },
    { type: 'text',
      name: 'lastName',
      placeholder: 'Last Name',
      value: null,
      min: null,
      required: true,
      finame: 'users'
    },
    { type: 'email',
      name: 'email',
      placeholder: 'Email',
      value: null,
      min: null,
      required: true,
      finame: 'envelope'
    },
    { type: 'password',
      name: 'password',
      placeholder: 'Password',
      value: null,
      min: null,
      required: true,
      finame: 'lock'
    },
    { type: 'password',
      name: 'confirm',
      placeholder: 'Confirm Password',
      value: null,
      min: null,
      required: true,
      finame: 'undo-alt'
    },
    { type: 'number',
      name: 'phone',
      placeholder: 'Phone Number',
      value: null,
      min: '0',
      required: true,
      finame: 'phone'
    }
  ];
  const checkbox =[
    {
      name: 'mailingList',
      type: 'checkbox',
      text: 'Join Mailing List'
    },
    {
      name: 'T&C',
      type: 'checkbox',
      text: 'T&C'
    }
  ];
  return (
    <div className='signup__main'>
      <div className='signup__topForm'>
        <h3 className='header1'>
             Sign Up
        </h3>
        <div className='select-user'>

          <button className='signup__button button0 supplier'>
        Supplier
          </button>
          <button className='signup__button button0'>
              Buyer
          </button>
        </div>
      </div>

      <div className='align'>

        <div className='grid'>

          <form action='' method='POST' className='form Signup'>
            <h3 className='form__top__heading'>What is your company Number?</h3>
            <br/>

            <div className='form__field'>
              <input id='CompanyHouseNumber' type='text' name='CompanyHouseNumber' onChange={handleChange} className='form__input' placeholder='Company House Number' required />
              <label htmlFor='CompanyHouseNumber'>
                <Fontawesome className='fontawesome' name='sort-numeric-up' />
                <span className='hidden' />
              </label>
            </div>

            {!visible &&
              <div className='form__field'>
                <input type='submit' className='submitButton' value='check' onClick={isCompany} />
              </div>
            }
            {
              error && !visible && <div className='error-msg'>Company Not Found</div>
            }
            {
              visible && (
                <div>
                  <FormInput arr={ arr } handleChange ={ handleChange }/>

                  <div className='spaceDiv--imgDiv'>
                    <div className='spaceDiv' />
                    <img src={ Group1 } alt='' className='spaceImg' />
                  </div>

                  <div className='checkBox'>
                    <Checkbox checkbox={ checkbox } handleChange= { handleChange }/>
                  </div>

                  <div className='form__field'>
                    <input type='submit' className='submitButton'value='Sign Up' onClick={submitForm} />
                  </div>
                </div>
              )
            }
          </form>
          {error2&&visible?<div className='error-msg'>{error2}</div>:null}
          <div className='SubmitDiv'>
            <p className='text--center'>
                Already have an account?
            </p>
            <a href='/login'>
              <p className='text--login'>
                   Login Now
              </p>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
