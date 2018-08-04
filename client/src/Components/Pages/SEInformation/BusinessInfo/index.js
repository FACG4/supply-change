import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import signal from './imgs/signal.png';
import binarycode from './imgs/binarycode.png';
import director from './imgs/director.png';
import network from './imgs/network.png';
import typeOfTrade from './imgs/typeOfTrade.png';

class BusinessInfo extends Component {
  render() {
    return (
      <div id="main">
        <div className="topForm">
          <h3 className="header1">
            Tell Us About Your Business
          </h3>
        </div>

        <div className="align">
          <div className="grid">
            <div className="form BusinessInfo">
               <div className="form__field">
                 <input id="CompanyLocation" type="text" name="" className="form__input" placeholder="Company Location" required />
                   <label htmlFor="CompanyLocation">
                   <img src={signal} className="icons" alt="signal" />
                  <span className="hidden" />
                </label>
              </div>

              <div className="form__field">
                <input id="CompanyAddress" type="text" name="CompanyAddress" className="form__input" placeholder="Company Address" required />
                 <label htmlFor="CompanyAddress">
                   <img src={signal} className="icons" alt="signal" />
                   <span className="hidden" />
                </label>
              </div>

              <div className="form__field">
                <input id="SIC-Code" type="text" name="SIC Code:" className="form__input" placeholder="SIC Code:" required />
                 <label htmlFor="SIC-Code">
                   <img src={binarycode} className="icons" alt="binarycode" />
                   <span className="hidden" />
                </label>
              </div>

              <div className="form__field">
                <input id="Director" type="text" name="Director" className="form__input" placeholder="Director:" required />
                <label htmlFor="Director">
                  <img src={director} className="icons" alt="binarycode" />
                  <span className="hidden" />
                </label>
              </div>

              <div className="form__field">
                <input id="CompanyStructure" type="text" name="CompanyStructure" className="form__input" placeholder="Company Structure" required />
                <label htmlFor="CompanyStructure">
                  <img src={network} className="icons" alt="network" />
                  <span className="hidden" />
                </label>
              </div>

              <div className="form__field">
                <input id="typeOfTrade" type="text" name="typeOfTrade" className="form__input" placeholder="Choose your type of trade:" required />
                <label htmlFor="typeOfTrade">
                  <img src={typeOfTrade} className="icons" alt="network" />
                  <span className="hidden" />
                </label>
              </div>

              <div className="form__field text__area">
                <textarea id="DescriptionOfTheCompany " type="text" name="DescriptionOfTheCompany" className="form__input" placeholder="Description of the company" required />
              </div>

              <div className="form__field SaveBtn">
                <input type="submit" value="Save & Continue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessInfo;
