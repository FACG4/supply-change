import React, { Component } from 'react';
import Fontawesome from 'react-fontawesome';
import axios from 'axios';

import './style.css';

class LogIn extends Component {
  
  state = {
    loginInfo: {},
    err: null,
    isLogged: true
  }

  ComponentDidMont(){
    if(localStorage.getItem('token')){
      window.location('/profile')
    }
  }

  callErr = (error) => {
    this.setState({
      ...this.state,
      err: error
    })
  }

  login = () => {
    const { loginInfo } = this.state;

    axios.post('/login', loginInfo)
    .then(res=>{
      if(!res.data.err){
        localStorage.setItem('token', res.data.token);
        window.location('/profile');  
      }else{
        this.callErr(res.data.err);
      }
      
    }).catch(err=>{
      this.callErr('Something went wrong');
    })

  }
 
  handleChange = (e) => {
    const { loginInfo } = this.state;
    const newLoginInfo = {...loginInfo}
    newLoginInfo[e.target.name] = e.target.value;
    this.setState({ loginInfo: newLoginInfo })
  }

  render() {

    return (
      <div className="flex">
      <div className="tringle"/>
      <div className="log__header">
          <h3 className="login__heading">
              LOG IN
          </h3>
        </div>
        <div className="login__main">
          <div className="login__top">
            <form action="" method="POST" className="form login">

              <div className="form__field">
                <input id="username" type="text" name="email" onChange={this.handleChange} className="form__input" placeholder="email" required />
                  <label htmlFor="username">
                  <Fontawesome className="fontawe" name="user" />
                  <span className="hidden" />
                </label>
               </div>

               <div className="form__field">
                 <input id="password" type="password" name="password" onChange={this.handleChange} className="form__input" placeholder="password" required />
                  <label htmlFor="password">
                  <Fontawesome className="fontawe" name="lock" />
                  <span className="hidden" />
                 </label>
                </div>
                
                <div>{this.state.err}</div>

                <div className="form__field">
                  <input type="submit" onClick= { this.login } className="submitButton" value="Log in" />
                </div>

            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LogIn ;