import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import './style.css';

class Header extends Component {
  state={
    redirect:false
  }

  fixNav=()=>{
     document.querySelector('#navbar').classList.add('scrolled');
     document.querySelector('#main').classList.add('scrolled');
   }

   handleScroll = () => {
     if (Math.round(window.scrollY) > 30) {
       this.fixNav()
     } else {
       document.querySelector('#navbar').classList.remove('scrolled');
       document.querySelector('#main').classList.remove('scrolled');
     }
   }

   componentDidMount() {
     this.props.isLogin?window.addEventListener('scroll',this.handleScroll):this.fixNav()
   }

   handleLogout=()=>{
     this.setState({
       ...this.state,
       redirect:true
     },()=>{
       this.props.loginLogout()
       window.removeEventListener('scroll',this.handleScroll)
     });
   }

  render() {
    const { businessName, businessRole, isLogin ,avatarUrl } = this.props;

    return (
      this.state.redirect?
      <Redirect to='/' /> :
      (
      <header id='header'>
        <div className='navbar' id='navbar'>
          <div className='navbar--fixed' >
            <ul className='nav'>
              <li className='item'>
                <NavLink to='/howitwork'>How it works</NavLink>
              </li>
              <li className='item'>
                <NavLink to='/about'>About us</NavLink>
              </li>
              <li className='item'>
                <div className='post_find_Contract'>
                  <NavLink to={`/contract/${businessRole==='SE'?'find':'post'}`}>
                  {businessRole==='SE'?'Find':'Post'} a contract
                  </NavLink>
                </div>
              </li>
              <li className='item' >
                { isLogin ?(
                  <div className=' companyAction'>
                    <span className='companyAction__span'>
                    <NavLink to='/profile'>
                    <img className='companyAction__img' src={avatarUrl} alt='' />
                    </NavLink>
                      {businessName}
                      <i className='fas fa-caret-down'></i>
                    </span>
                    <div className='companyAction-content' >
                      <NavLink to='/profile'><i className='fas fa-user'></i>Profile</NavLink>
                      <NavLink to={`/contract/${businessRole==='SE'?'find':'post'}`}>
                      <i className={businessRole==='SE'?'fas fa-search':'fas fa-plus-circle'}></i>{businessRole==='SE'?'Find':'Post'} a contract
                      </NavLink>
                      <a  onClick={() =>  this.handleLogout() }><i className='fas fa-sign-out-alt'></i>Logout</a>
                    </div>
                  </div>
                ):(
                  <NavLink to='/login'>Login<i className='fas fa-sign-in-alt'></i></NavLink>
                )}
              </li>
            </ul>
            <div className='logo'>
            <NavLink to='/'>
            <img src='https://pbs.twimg.com/profile_images/996015715722387458/WofTKvoF_400x400.jpg' />
            </NavLink>
            </div>
          </div>
          <div className='welcome'>
            <h1>Welcome {businessName}</h1>
          </div>
        </div>
      </header>
      )
    );
  }
}

export default Header;
