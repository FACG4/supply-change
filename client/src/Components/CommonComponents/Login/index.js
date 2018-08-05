import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Fontawesome from 'react-fontawesome';

class LogIn extends Component {
  state = {
    loginInfo:{}
  }

  handleChange = (e)=> {
    const { loginInfo } = this.state;
    const newLoginInfo = [...loginInfo];
    newLoginInfo[e.target.name]=e.target.value;
    this.setState({ newLoginInfo })
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
                <input id="username" type="text" name="username" onChange={this.handleChange} className="form__input" placeholder="user name" required />
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

                <div className="form__field">
                  <input type="submit" className="submitButton" value="Log in" />
                </div>

               </form>
              </div>
             </div>
            </div>
          )
        }
      }
export default LogIn ;
