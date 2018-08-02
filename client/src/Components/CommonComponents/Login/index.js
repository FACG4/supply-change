import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Fontawesome from 'react-fontawesome';

class LogIn extends Component {
  state={
    loginInfo:{}
  }

  handleChange = (e)=>{
    const { loginInfo } = this.state;
    loginInfo[e.target.name]=e.target.value;
    this.setState({ loginInfo })
  }
  render() {
    return (
      <div>
      <div className="topForm">
          <h3 className="header1">
              LOG IN
          </h3>
        </div>

        <div className="align">
          <div className="grid">
            <form action="" method="POST" className="form login">

              <div className="form__field">
                <input id="username" type="text" name="username" onChange={this.handleChange} className="form__input" placeholder="user name" required />
                <label htmlFor="username">
                  <Fontawesome className="fontawesome" name="user" />
                  <span className="hidden" />
                </label>
              </div>

              <div className="form__field">
                <input id="password" type="text" name="password" onChange={this.handleChange} className="form__input" placeholder="password" required />
                 <label htmlFor="password">
                  <Fontawesome className="fontawesome" name="lock" />
                  <span className="hidden" />
                 </label>
                </div>

                <div className="form__field">
                  <input type="submit" className="submitButton"value="Log in" />
                </div>

               </form>
              </div>
             </div>
            </div>
          )
        }
      }
export default LogIn ;
