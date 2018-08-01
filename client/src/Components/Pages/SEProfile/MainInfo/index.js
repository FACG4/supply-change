import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Group from './Imgs/Group.png';
import Place from './Imgs/Place.png';
import Team from './Imgs/Team.png';
import Vector from './Imgs/Vector.png';
import compUrl from './Imgs/compUrl.png';
import phoneCall from './Imgs/phoneCall.png';
import mail from './Imgs/mail.png';
import facebook from './Imgs/facebook.png';
import instagram from './Imgs/instagram.png';
import twitter from './Imgs/twitter.png';

class MainInfo extends Component {
  render() {
    return (
      <div className="contanier">
        <div className="heading">
          <h2>  Preview of your Profile  </h2>
        </div>

        <div className="mainInfo">
          <div className="allBoxesDiv">

            <div className="boxDiv">
              <div className="icon_div">
                <img src={Group} alt="" />
              </div>
              <div className="text_div">
                <ul>
                  <li className="infoType">servicse</li>
                  <li className="infoReply">cleaning</li>
                </ul>
              </div>
            </div>

            <div className="boxDiv">
              <div className="icon_div">
                <img src={Place} alt="" />
              </div>
              <div className="text_div">
                <ul>
                  <li className="infoType">location</li>
                  <li className="infoReply">london</li>
                </ul>
              </div>
            </div>
            
            <div className="boxDiv">
              <div className="icon_div">
                <img src={Team} alt="" />
              </div>
              <div className="text_div">
                <ul>
                  <li className="infoType">Team Size </li>
                  <li className="infoReply">4</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="comInformation">
          <div>
            <figure>
              <img src={'http://www.logofound.com/wp-content/uploads/2016/07/Company-Logo-Template-02.png'} alt="" className="companyLogo"/>
              <figcaption>company name</figcaption>
            </figure>
          </div>

          <div className="listItems">
          <div className="listItemsInfo">
            <ul >
              <li>
              <img src={Vector} />
                <span>274 Seven Sisters , London, N4 2HY</span>
              </li>

              <li>
              <img src={compUrl} />
                <span>www.example.com</span>
              </li>

              <li>
              <img src={phoneCall} />
                <span>+90 538 963 54 87</span>
              </li>

              <li>
              <img src={mail} />
                <span>example@example.com</span>
              </li>
            </ul>
            </div>

            <div className="socialMedia">
            <ul >
              <li><img src={facebook} /></li>
              <li><img src={instagram} /></li>
              <li><img src={twitter} /></li>
            </ul>
            </div>
          </div>
        </div>

        <div className="lineDiv">
        </div>

        <div className="comDescription">
          <h3 className="h2CompanyD">Company Description</h3>
          <div className="descriptionTextDiv">
          <div className="descriptionText">
            <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
             Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.
             Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus.
            </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainInfo;
