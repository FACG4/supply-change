import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import {
  Redirect
} from 'react-router-dom';
import './style.css';
import axios from 'axios';
import SignupForm from './SignupForm';

class SignUp extends Component {
  state = {
    userInfo: {},
    companyInfo: [],
    visible: false,
    error: false,
    redirect: false
  }

  isCompany = (e) => {
    e.preventDefault();
    const {
      userInfo
    } = this.state;
    const newUserInfo = { ...userInfo
    }
    const companyNumber = userInfo.CompanyHouseNumber;
    newUserInfo[e.target.name] = companyNumber;
    axios.get(`/companyinfo/${companyNumber}`)
      .then(result => {
        if (result.data.errors) {
          this.setState({
            error: result.data.errors[0].error
          })
        } else {
          this.setState({
            companyInfo: result.data,
            visible: !this.state.visible,
            error: ''
          })
        }
      })
      .catch(()=>this.setState({error:'error in fetching data fom api'}))
  }

  submitForm = (e) => {
    e.preventDefault();
    const {
      userInfo
    } = this.state;
    userInfo.companyName = this.state.companyInfo.company_name;
    if (userInfo['TC']) {
      axios.post('/userdata', userInfo)
        .then((response)=> {
          if (response.data.msg === 'success') {
            this.setState({redirect:true})
          }else{
            this.setState({error2:response.data.err})
          }
        })
        .catch((error) => {
          this.setState({error:"something error "})
        })
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    const {
      userInfo
    } = this.state;
    const newUserInfo = { ...userInfo
    }
    if (e.target.type === 'checkbox') {
      newUserInfo[e.target.name] = e.target.checked
    } else {
      newUserInfo[e.target.name] = e.target.value;
    }
    this.setState({
      userInfo: newUserInfo
    });
  }
  render() {
    return (
  this.state.redirect ?(
      <Redirect to = '/login' /> ):(
      <SignupForm { ...this.state }
      isCompany = { this.isCompany}
      handleChange = {this.handleChange}
      submitForm = {this.submitForm}
      />
    )
    );
  }
}

export default SignUp;
