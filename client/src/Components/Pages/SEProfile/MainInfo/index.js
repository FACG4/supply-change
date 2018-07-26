import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Group from './Imgs/Group.png';

class MainInfo extends Component {
  render() {
    return (
      <div className="contanier">
        <div className="zero">

          <h2>
        Preview of your Profile
          </h2>
        </div>
        <div className="one">
          <div>
            <div className="boxDiv">
              <div className="icon_div">
                <img src={Group} alt="" />
              </div>
              <div className="text_div">
                <ul>
                  <li>
servicse
                  </li>
                  <li>
cleaning
                  </li>
                </ul>
              </div>
            </div>

            <div className="boxDiv">
              <div className="icon_div">
                <img src={Group} alt="" />
              </div>
              <div className="text_div">
                <ul>
                  <li>
servicse
                  </li>
                  <li>
cleaning
                  </li>
                </ul>
              </div>
            </div>
            <div className="boxDiv">
              <div className="icon_div">
                <img src={Group} alt="" />
              </div>
              <div className="text_div">
                <ul>
                  <li>
servicse
                  </li>
                  <li>
cleaning
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="two">
          <div>
            <figure>
              <img src={Group} alt="" />
              <figcaption>
company name
              </figcaption>
            </figure>
          </div>
          <div>
            <ul>
              <li>
                <img src={Group} />
                {' '}
                <span>
helllllllllo
                </span>
              </li>

              <li>
                <img src={Group} />
                {' '}
                <span>
helllllllllo
                </span>
              </li>

              <li>
                <img src={Group} />
                {' '}
                <span>
helllllllllo
                </span>
              </li>

            </ul>

            <ol>
              <img src={Group} />
              <img src={Group} />
              <img src={Group} />
            </ol>
          </div>

        </div>
        <div className="three">
          <h2>
Company Description
          </h2>
          <div>
            <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.

Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.

Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MainInfo;
