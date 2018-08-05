import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SEProfile from './Pages/SEProfile';
import HomePage from './Pages/HomePage';
import ResultPage from './Pages/ResultPage';
import Signup from './Pages/Signup';
import Header from './CommonComponents/Header';
import Login from './CommonComponents/Login';
import SEInofrmation from './Pages/SEInformation';


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
              <div id={ this.state.isLogin ? 'main' : null} >
              <Route path='/profile' component={SEProfile} exact />
              <Route path='/contract/find'  render={()=><ResultPage SEId={this.state.businessId} />} exact  />
              <Route path='/signup' component={Signup} exact />
              <Route path='/login' component={Login} exact />
              {/* <Route path='/Turnover' component={Turnover} exact /> */}
              <Route path='/seinofrmation' component={SEInofrmation} exact />
              </div>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
