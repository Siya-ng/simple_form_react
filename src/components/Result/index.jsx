import React, { Component } from 'react';
// import { toNumber } from 'lodash';

class Result extends Component {

// renderChildren = (noOfChildren) => {
//   const childrenNo = toNumber(noOfChildren)
// }

render() {
  const { name, email, phoneNumber, spouse, spouseName, noOfChildren, fromLocation, toLocation, travelDate} = this.props.details
  return (
    <div className="result-container">
    
      <h2>Name: {name}</h2>
      <div className="row">
        <h3>Email: {email}</h3>
        <h3 style={{marginLeft: 'auto'}}>Phone: {phoneNumber}</h3>
      </div>
      <div className="result-family">
        <h3>Family</h3>
        <div className="row">
          <h4>Spouse: {spouse ? 'yes  ' : 'no  '}</h4>
          {spouse ? (
            <h4 style={{marginLeft: 'auto'}}>Spouse's Name: {spouseName}</h4>
          ) : null}
        </div>
        <div>
          <h4>Number Of Children: {noOfChildren} </h4>
        </div>
      </div>
      <div className="result-location">
        <div>
          <h3>Location</h3>
          <div className="row">
            <h4>From: {fromLocation}</h4>
            <h4 style={{marginLeft: 'auto'}}>To: {toLocation}</h4>
          </div>
        </div>
        <h4>Date: {travelDate}</h4>
      </div>
    </div>
  )}
}

export default Result;