import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SEProfile from './Pages/SEProfile';
import HomePage from './Pages/HomePage';
import ResultPage from './Pages/ResultPage';
import Signup from './Pages/Signup';
import AboutHowItWorks from './Pages/AboutHowItWorks';
import ContractDetails from './Pages/ContractDetails';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import Login from './Pages/Login'
import SEInofrmation from './Pages/SEInformation';
import Error from './Pages/Error';

import './App.css';

class App extends Component {
  state = {
    isLogin: false,
    businessRole: 'SE',
    businessName: 'ramy company',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/62/USPHS_Commissioned_Corps_insignia.png'
    }

    loginLogout = () => {
      this.setState({
        ...this.state,
        isLogin:!this.state.isLogin
      })
    }

    componentDidMount() {
      const info = JSON.parse(localStorage.getItem('userInfo'));
      if (info) {
        const {se_name, logo_link, is_complete, id} = info
        this.setState({
          ...this.state,
          isLogin:true,
          businessName:se_name.substring(0,12),
          avatarUrl:logo_link,
          businessId:id
        })
      }
    }

  render() {

    return (
      <BrowserRouter>
        <div className='routerContainer'>
          <Route path={/[^/]/} render={() => <Header { ...this.state } loginLogout={ this.loginLogout }/>}/>
            <Switch>
              <Route path='/' component={HomePage} exact  />
              <Route path='/profile' component={SEProfile} exact />
              <Route path='/contract/find'  render={()=><ResultPage  />} exact  />
              <Route path='/signup' component={Signup} exact />
              <Route path='/login' component={Login} exact />
              <Route path='/seinformation' render={() => <SEInofrmation SEId={this.state.businessId}/>}exact />
              <Route path='/About' render={()=><AboutHowItWorks target='about' />} exact />
              <Route path='/howitwork' render={()=><AboutHowItWorks target='howItWorks' />}  exact />
              <Route path='/contractinfo/:id' component={ContractDetails} exact />
              <Route component={Error}  />
            </Switch>
            <Footer />
        </div>
      </BrowserRouter>

    );
  }
}
export default App;
