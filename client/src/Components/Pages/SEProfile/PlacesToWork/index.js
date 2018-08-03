import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';


class Places extends Component {
  render(){
    return(
      <div className="placesMainDiv">
        <h3 className="h3">Places that we can work at:</h3>
       <div className="PlacesToWork">
        <div className="spanTextsContainer">
         <div className="spanText">
          <span>London</span>
         </div>
         <div className="spanText">
          <span>Gaza</span>
         </div>
         <div className="spanText">
          <span>Japan</span>
         </div>
       </div>
      </div>

      <div className="browseBtnDiv">
       <button type="button" claasName="btn">Browse Contracts</button>
      </div>

      </div>
    )
  }
}
export default Places;
