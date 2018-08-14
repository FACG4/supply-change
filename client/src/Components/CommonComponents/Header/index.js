import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import action from './action.js';
import CompanyAction from './CompanyAction.js';
import Nav from './Nav.js';

import './style.css';
import logo from './logo.svg';


class Header extends Component {
  state = {
    redirect: false,
    businessRole:'SE',
    isLogin:false

  }

   fixNav = () => {
     if (document.querySelector('#navbar'))
    document.querySelector('#navbar').classList.add('scrolled');
    if (this.state.isLogin&&document.querySelector('#main')){
      document.querySelector('#main').classList.add('scrolled');

    }
  };

   handleScroll = () => {
    if (Math.round(window.scrollY) > 30) {
      this.fixNav(this.state.isLogin);
    } else if (document.querySelector('#navbar')&&document.querySelector('#main')) {
      document.querySelector('#navbar').classList.remove('scrolled');
      document.querySelector('#main').classList.remove('scrolled');
    }
  };

   componentDidMount() {
     const info = JSON.parse(localStorage.getItem('userInfo'));
     if (info) {
       const {se_name, logo_link, is_complete} = info
       this.setState({
         ...this.state,
         isLogin:true,
         businessName:se_name.substring(0,15),
         avatarUrl:logo_link
       },()=>{
         this.state.isLogin ? window.addEventListener('scroll', this.handleScroll):this.fixNav(this.state.isLogin)

       })
     }else{
       this.state.isLogin ? window.addEventListener('scroll', this.handleScroll):this.fixNav(this.state.isLogin)

     }
   }

   handleLogout = () => {
     this.setState({
       ...this.state,
       redirect:true
     } , () => {
       localStorage.removeItem('userInfo')
       window.removeEventListener('scroll', this.handleScroll)
     });
   }

  render() {
    const { businessName, businessRole, isLogin, avatarUrl } = this.state;
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
                    <img src={logo} />
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
