import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import './style.css';
import axios from 'axios';
import SignupForm from './SignupForm';

class SignUp extends Component {
  state = {
    userInfo:{},
    companyInfo:[],
    visible:false,
    error:'',
    redirect:false
  }

  isCompany = (e)=> {
    e.preventDefault();
    const { userInfo } = this.state;
    const newUserInfo = {...userInfo}
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
   console.log('ramy');
   const { userInfo } = this.state;
   userInfo.companyName = this.state.companyInfo.company_name;
   console.log(userInfo)
   if(userInfo['T&C']){
     axios.post('/userdata',userInfo)
     .then(function (response) {
       console.log(response);
       if(response.data.msg === 'success'){
         window.location = '/login'
       }
     })
     .catch(function (error) {
       console.log(error);
     })
   }
}

  handleChange = (e)=>{
    e.preventDefault();
    const { userInfo } = this.state;
    const newUserInfo = {...userInfo}
    if(e.target.type === 'checkbox'){
      newUserInfo[e.target.name] = e.target.checked
    }else{
      newUserInfo[e.target.name]= e.target.value ;
    }
    this.setState({ userInfo: newUserInfo });
    console.log( userInfo,'userinfo' );
}
  render() {
    return (
      this.state.redirect ?
        <Redirect to='/' /> :
        (
          <SignupForm {...this.state} isCompany={this.isCompany} handleChange={this.handleChange} submitForm={this.submitForm} visible={this.state.visible}/>
        )
    );
  }
}

export default SignUp;
