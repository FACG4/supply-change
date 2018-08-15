import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SEProfile from './Pages/SEProfile';
import HomePage from './Pages/HomePage';
import ResultPage from './Pages/ResultPage';
import Signup from './Pages/Signup';
import AboutHowItWorks from './Pages/AboutHowItWorks';
import Header from './CommonComponents/Header';
import Login from './CommonComponents/Login'

import './App.css';

class App extends Component {
  state = {
    isLogin: false,
    businessRole: 'SE',
    businessId: '1',
    businessName: 'ramy company',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/62/USPHS_Commissioned_Corps_insignia.png'
    }

    loginLogout = () => {
      this.setState({
        ...this.state,
        isLogin:!this.state.isLogin
      })
    }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path={/[^/]/} render={() => <Header { ...this.state } loginLogout={ this.loginLogout }/>}/>
            <Switch>
              <Route path='/' component={HomePage} exact  />
              <div id={ this.props.isLogin ? 'main' : null} >
              <Route path='/profile' component={SEProfile} exact />
              <Route path='/contract/find'  render={()=><ResultPage SEId={this.props.businessId} />} exact  />
              <Route path='/signup' component={Signup} exact />
              <Route path='/login' component={Login} exact />
              <Route path='/About' render={()=><AboutHowItWorks target='about' />} exact />
              <Route path='/howitwork' render={()=><AboutHowItWorks target='howItWorks' />}  exact />
              </div>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
