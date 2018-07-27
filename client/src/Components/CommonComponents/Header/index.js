import React, { Component } from 'react';
import './style.css';

class Header extends Component {
  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (Math.round(window.scrollY) > 100) {
        document.querySelector('#navbar').classList.add('scrolled');
      } else {
        document.querySelector('#navbar').classList.remove('scrolled');
      }
    });
  }
  render() {
    return (
      <header id='header'>
        <div className='navbar' id='navbar'>
          <div className='navbar--fixed' >

            <ul className='nav'>
              <li className='item'>
                <a href='#'>How it works</a>
              </li>

              <li className='item'>
                <a href='#'>About us</a>
              </li>

              <li className='item'>
                <div className='post_find_Contract'>

                  <a href='#'>Post a contract</a>
                </div>
              </li>

              <li className='item' >
                <div className=' companyAction'>
                  <span>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/6/62/USPHS_Commissioned_Corps_insignia.png' alt='' />
                      company Name
                    <i className='fas fa-caret-down'></i>
                  </span>
                  <div className='companyAction-content' >
                    <a href='#'><i className='fas fa-user'></i>Profile</a>
                    <a href='#'><i className='fas fa-plus-circle'></i>Post a contract</a>
                    <a href='#'><i className='fas fa-sign-out-alt'></i>Logout</a>

                  </div>

                </div>
              </li>
            </ul>

            <div className='logo'>
              <img src='https://pbs.twimg.com/profile_images/996015715722387458/WofTKvoF_400x400.jpg' />
            </div>
          </div>
          <div className='welcome'>
            <h1>Welcome &lt;Company Name&gt;</h1>
          </div>
        </div>

      </header>

    );
  }
}

export default Header;
