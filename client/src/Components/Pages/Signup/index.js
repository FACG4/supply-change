import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Group from './Imgs/Group.png';
import password from './Imgs/password.png';
import business from './Imgs/business.png';
import user from './Imgs/user.png';
import family from './Imgs/family.png';
import mail from './Imgs/mail.png';
import confirm from './Imgs/confirm.png';
import phonecall from './Imgs/phone-call.png';
import Group1 from './Imgs/Group1.png';
import './style.css';


class Signup extends Component {
  render() {
    return (
      <div>
        <div className="topForm">
          <h3 className="header">
Sign Up
            {' '}
          </h3>

          <div className="select-user">
            <button className="button button1">
Buyer
            </button>
            <button className="button button1">
Supplier
            </button>

          </div>
        </div>

        <div className="align">

          <div className="grid">

            <form action="" method="POST" className="form Signup">

              <div className="form__field">
                <input id="CompanyHouseNumber" type="text" name="CompanyHouseNumber" className="form__input" placeholder="Company House Number" required />
                <label htmlFor="Company House Number">
                  <img src={Group} className="icon" alt="CompanyHouseNumber" />

                  <span className="hidden">
              Username
                  </span>
                </label>
              </div>

              <div className="form__field">
                <input id="businessName" type="text" name="businessName" className="form__input" placeholder="Business Name" required />
                <label htmlFor="businessName">
                  <img src={business} className="icon" alt="businessName" />
                  <span className="hidden">
              Password
                  </span>
                </label>
              </div>

              <div className="form__field">
                <input id="firstName" type="text" name="firstName" className="form__input" placeholder="First Name" required />
                <label htmlFor="firstName">
                  <img src={user} className="icon" alt="firstName" />
                  <span className="hidden">
              Password
                  </span>
                </label>
              </div>

              <div className="form__field">
                <input id="lastName" type="text" name="lastName" className="form__input" placeholder="Last Name" required />
                <label htmlFor="lastName">
                  <img src={family} className="icon" alt="lastName" />
                  <span className="hidden">
              Password
                  </span>
                </label>
              </div>

              <div className="form__field">
                <input id="email" type="text" name="eamil" className="form__input" placeholder="Email" required />
                <label htmlFor="email">
                  <img src={mail} className="icon" />
                  <span className="hidden">
              Password
                  </span>
                </label>
              </div>

              <div className="form__field">
                <input id="password" type="password" name="password" className="form__input" placeholder="Password" required />
                <label htmlFor="password">
                  <img src={password} className="icon" alt="password" />
                  <span className="hidden">
              Password
                  </span>
                </label>
              </div>

              <div className="form__field">
                <input id="confirm" type="password" name="confirm" className="form__input" placeholder="Confirm Password" required />
                <label htmlFor="confirm">
                  <img src={confirm} className="icon" alt="confirm" />
                  <span className="hidden">
              Password
                  </span>
                </label>
              </div>

              <div className="form__field">
                <input id="phone" type="text" name="phone" className="form__input" placeholder="Phone Number" required />
                <label htmlFor="phone">
                  <img src={phonecall} className="icon" alt="phonecall" />
                  <span className="hidden">
              Password
                  </span>
                </label>
              </div>

              <div className="spaceDiv--imgDiv">
                <div className="spaceDiv" />
                <img src={Group1} alt="" className="Group1" />
              </div>

              <div className="checkBox">
                <input id="mailingList" type="checkbox" name="mailingList" value="mailingList" />
                <span className="checkBoxSpan">
Join Mailing List
                </span>


                <input id="T&C" type="checkbox" name="T&C" value="T&C" checked />
                <span className="checkBoxSpan">
T&C
                </span>

              </div>

              <div className="form__field">
                <input type="submit" value="Sign Up" />
              </div>

            </form>
            <div className="SubmitDiv">
              <p className="text--center">
Already have an account?
              </p>
              <a href="#">

                <p className="text--login">
Login Now

                </p>
                {' '}
              </a>
            </div>


          </div>


        </div>

      </div>
    );
  }
}

export default Signup;
