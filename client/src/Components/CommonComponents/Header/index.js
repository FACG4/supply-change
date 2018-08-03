import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import action from './action.js';
import CompanyAction from './CompanyAction.js';
import Nav from './Nav.js';

import './style.css';


class Header extends Component {
  state = {
    redirect: false
  }

   fixNav = () => {
    document.querySelector('#navbar').classList.add('scrolled');
    if (this.props.isLogin)
      document.querySelector('#main').classList.add('scrolled');
  };

   handleScroll = () => {
    if (Math.round(window.scrollY) > 30) {
      this.fixNav(this.props.isLogin);
    } else {
      document.querySelector('#navbar').classList.remove('scrolled');
      document.querySelector('#main').classList.remove('scrolled');
    }
  };

   componentDidMount() {
     this.props.isLogin ? window.addEventListener('scroll', this.handleScroll):this.fixNav(this.props.isLogin)
   }

   handleLogout = () => {
     this.setState({
       ...this.state,
       redirect:true
     } , () => {
       this.props.loginLogout()
       window.removeEventListener('scroll', this.handleScroll)
     });
   }

  render() {
    const { businessName, businessRole, isLogin, avatarUrl } = this.props;
    const options = { businessName, businessRole, avatarUrl, handlelogout: this.handleLogout, isLogin };
    return (
      this.state.redirect ?
        <Redirect to='/' /> :
        (
          <header id='header'>
            <div className='navbar' id='navbar'>
              <div className='navbar--fixed' >
                <Nav {...options}/>
                <div className='logo'>
                  <NavLink to='/'>
                    <img src='https://pbs.twimg.com/profile_images/996015715722387458/WofTKvoF_400x400.jpg' />
                  </NavLink>
                </div>
              </div>
              <div className='welcome'>
                <h1>Welcome { businessName }</h1>
              </div>
            </div>
          </header>
        )
    );
  }
}

export default Header;
