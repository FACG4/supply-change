import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Group1 from './Imgs/Group1.png';
import Fontawesome from 'react-fontawesome';
import Input from './Input';
import Checkbox from './Checkbox';

export default ({ handleChange, visible, error, isCompany, submitForm, companyInfo }) => {
  const arr = [
    { id: 'businessName',
      type: 'text',
      name: 'businessName',
      className: 'form__input',
      placeholder: 'Business Name',
      htmlFor: 'businessName',
      value: companyInfo.company_name,
      required: true,
      finame: 'briefcase'
    },
    { id: 'firstName',
      type: 'text',
      name: 'firstName',
      className: 'form__input',
      placeholder: 'First Name',
      htmlFor: 'firstName',
      value: null,
      min: null,
      required: true,
      finame: 'user'
    },
    { id: 'lastName',
      type: 'text',
      name: 'lastName',
      className: 'form__input',
      placeholder: 'Last Name',
      htmlFor: 'lastName',
      value: null,
      min: null,
      required: true,
      finame: 'users'
    },
    { id: 'email',
      type: 'email',
      name: 'email',
      className: 'form__input',
      placeholder: 'Email',
      htmlFor: 'email',
      value: null,
      min: null,
      required: true,
      finame: 'envelope'
    },
    { id: 'password',
      type: 'password',
      name: 'password',
      className: 'form__input',
      placeholder: 'Password',
      htmlFor: 'password',
      value: null,
      min: null,
      required: true,
      finame: 'lock'
    },
    { id: 'confirm',
      type: 'password',
      name: 'confirm',
      className: 'form__input',
      placeholder: 'Confirm Password',
      htmlFor: 'confirm',
      value: null,
      min: null,
      required: true,
      finame: 'undo-alt'
    },
    { id: 'phone',
      type: 'number',
      name: 'phone',
      className: 'form__input',
      placeholder: 'Phone Number',
      htmlFor: 'phone',
      value: null,
      min: '0',
      required: true,
      finame: 'phone'
    }
  ];
  const checkbox =[
    {
      id: 'mailingList',
      name: 'mailingList',
      value: 'mailingList',
      className: 'checkBoxSpan',
      type: 'checkbox',
      text: 'Join Mailing List'
    },
    {
      id: 'T&C',
      name: 'T&C',
      value: 'T&C',
      className: 'checkBoxSpan',
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
          <button className='signup__button buttonSE'>
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

            <div className='form__field'>
              <input id='CompanyHouseNumber' type='number' min='0' name='CompanyHouseNumber' onChange={handleChange} className='form__input' placeholder='Company House Number' required />
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
              error && <div className='error-msg'>Company Not Found</div>
            }
            {
              visible && (
                <div>
                  <Input arr={ arr } handleChange ={ handleChange }/>

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
          <div>{error}</div>
          <div className='SubmitDiv'>
            <p className='text--center'>
                Already have an account?
            </p>
            <a href='#'>
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
