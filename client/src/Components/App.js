import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import SignUp from './Pages/Signup';
import Login from './CommonComponents/Login';
import SocialImpact from './Pages/SEInformation/SocialImpact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path={/[^/]/} render={() => <Header { ...this.state } loginLogout={ this.loginLogout }/>}/>
          <Switch>
            <Route path='/' component={HomePage} exact />
            <div id={ this.state.isLogin ? 'main' : null} >
              <Route path='/profile' component={SEProfile} exact />
              <Route path='/contract/find' component={ResultPage} exact />
              <Route path='/signup' component={Signup} exact />
              <Route path='/login' component={Login} exact />
              <Route path='/socialImpact' component={SocialImpact} exact />
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
