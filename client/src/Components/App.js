import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SEProfile from './Pages/SEProfile';
import HomePage from './Pages/HomePage';
import ResultPage from './Pages/ResultPage';
import Signup from './Pages/Signup';
import Header from './CommonComponents/Header';
import './App.css';
import BusinessInfo from './Pages/SEInformation/BusinessInfo'
import Header from './CommonComponents/Header'
import LogIn from './CommonComponents/Login'

class App extends Component {
  state = {
    isLogin: false,
    businessRole: 'SE1',
    businessId: '',
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
              <div id={ this.state.isLogin ? 'main' : null} >
              <Route path='/profile' component={SEProfile} exact />
              <Route path='/contract/find' component={ResultPage} exact />
              <Route path='/signup' component={Signup} exact />
              <Route path='/login' component={Login} exact />
              </div>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
