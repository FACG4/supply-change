import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import axios from 'axios';
import Fontawesome from 'react-fontawesome';
import family from './Imgs/family.png';
import Group1 from './Imgs/Group1.png';

class SignUp extends Component {
  state ={
    userInfo:{},
    companyInfo:[],
    visible:false,
    error:''
  }

  isCompany = (e)=> {
    e.preventDefault();
    const { userInfo } = this.state;
    const newUserInfo = [...userInfo]
    const companyNumber = userInfo.CompanyHouseNumber;
    newUserInfo[e.target.name]= companyNumber ;
    console.log(companyNumber,'companyNumber')

      axios.get(`/companyinfo/${companyNumber}`)
      .then(result =>{
        console.log(result,'result');
        if(result.data.errors){
          console.log(result.data.errors[0].error,'errror');
          this.setState({error:result.data.errors[0].error})
          console.log(this.state.error,'error from state');
        }else {
          this.setState({companyInfo:result.data,
                visible:!this.state.visible,
                error:''})

          console.log(this.state.companyInfo);
        }
      })
      .catch(err=>console.log(err, ' err'))
  }

 submitForm =(e)=>{
   e.preventDefault();
   const { userInfo } = this.state;
   console.log(userInfo)
  axios.post('/userdata',userInfo)
 .then(function (response) {
  console.log(response);
 })
 .catch(function (error) {
  console.log(error);
})
}

  handleChange = (e)=>{
    e.preventDefault();
    const { userInfo } = this.state;
    const newUserInfo = {...userInfo}
    newUserInfo[e.target.name]= e.target.value ;
    this.setState({ userInfo: newUserInfo });
    console.log( userInfo,'userinfo' );
}
  render() {
    return (
      <div className="signup__main">
      <div className="signup__topForm">
          <h3 className="header1">
              Sign Up
          </h3>
          <div className="select-user">

            <button className="signup__button button0">
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
                <input id="CompanyHouseNumber" type="text" name="CompanyHouseNumber" onChange={this.handleChange} className="form__input" placeholder="Company House Number" required />
                <label htmlFor="CompanyHouseNumber">
                  <Fontawesome className="fontawesome" name="sort-numeric-up" />
                  <span className="hidden" />
                </label>
              </div>

                {!this.state.visible?
<<<<<<< Updated upstream
              <div className="form__field">
                <input type="submit" className="submitButton" value="check" onClick={this.isCompany} />
              </div>
              :null
            }
              {this.state.error?<div className="error-msg">Company Not Found</div>:null}

            {this.state.visible?(
              <div>
              <div className="form__field">
=======
              <div className="form__field">
                <input type="submit" className="submitButton" value="check" onClick={this.isCompany} />
              </div>
              :null
            }
              {this.state.error?<div className="error-msg">Company Not Found</div>:null}

            {this.state.visible?(
              <div>
              <div className="form__field">
>>>>>>> Stashed changes
                <input id="businessName" type="text" name="businessName" value={this.state.companyInfo.company_name}  onChange={this.handleChange} className="form__input" placeholder="Business Name" required />
                <label htmlFor="businessName">
                  <Fontawesome className="fontawesome" name="briefcase" />
                  <span className="hidden" />
                </label>
              </div>

              <div className="form__field">
                <input id="firstName" type="text" name="firstName"  onChange={this.handleChange} className="form__input" placeholder="First Name" required />
                <label htmlFor="firstName">
                  <Fontawesome className="fontawesome" name="user" />
                  <span className="hidden" />
                </label>
              </div>

              <div className="form__field">
                <input id="lastName" type="text" name="lastName"   onChange={this.handleChange} className="form__input" placeholder="Last Name" required />
                <label htmlFor="lastName">
                <Fontawesome className="fontawesome" name="users" />

                  <span className="hidden" />
                </label>
              </div>

              <div className="form__field">
                <input id="email" type="text" name="eamil"  onChange={this.handleChange} className="form__input" placeholder="Email" required />
                <label htmlFor="email">
                  <Fontawesome className="fontawesome" name="envelope" />
                  <span className="hidden" />
                </label>
              </div>

              <div className="form__field">
                <input id="password" type="password" name="password"  onChange={this.handleChange} className="form__input" placeholder="Password" required />
                <label htmlFor="password">
                  <Fontawesome className="fontawesome" name="lock" />
                  <span className="hidden" />
                </label>
              </div>

              <div className="form__field">
                <input id="confirm" type="password" name="confirm"   onChange={this.handleChange} className="form__input" placeholder="Confirm Password" required />
                <label htmlFor="confirm">
                  <Fontawesome className="fontawesome" name="unlock-alt" />

                  <span className="hidden" />
                </label>
              </div>

              <div className="form__field">
                <input id="phone" type="text" name="phone"  onChange={this.handleChange} className="form__input" placeholder="Phone Number" required />
                <label htmlFor="phone">
                  <Fontawesome className="fontawesome" name="phone" />
                  <span className="hidden" />
                </label>
              </div>

              <div className="spaceDiv--imgDiv">
                <div className="spaceDiv" />
                <img src={Group1} alt="" className="spaceImg" />
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
                <input type="submit" className="submitButton"value="Sign Up" onClick={this.submitForm} />
              </div>
              </div>
            ):null}
            </form>

            <div className="SubmitDiv">
              <p className="text--center">
                 Already have an account?
              </p>
              <a href="#">
                <p className="text--login">
                    Login Now
                </p>
              </a>
            </div>

          </div>
        </div>
      </div>

    );
  }
}

export default SignUp;
