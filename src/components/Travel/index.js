import React, { Component } from 'react';

class Travel extends Component {

  render (){
    const { fromLocation, toLocation, travelDate, pageThreeErrors } = this.props.details
    return (
      <div>
        <div className="row form-group">
          <label className="form-label">From</label>
          <div className="input-container">
            <input 
              type="text"
              name="fromLocation"
              className="form-control"
              value={fromLocation}
              onChange={this.props.onChange}
              placeholder="Location"
            />
          </div>
          {pageThreeErrors.fromLocation ? (
              <span className="error-message">! {pageThreeErrors.fromLocation}</span>
            ) : null}
        </div>
        <div className="row form-group">
          <label className="form-label">To</label>
          <div className="input-container">
            <input
              type="text"
              name="toLocation"
              className="form-control"
              value={toLocation}
              onChange={this.props.onChange}
              placeholder="Location"
            />
          </div>
          {pageThreeErrors.toLocation ? (
              <span className="error-message">! {pageThreeErrors.toLocation}</span>
            ) : null}
        </div>
        <div className="row form-group">
          <label className="form-label">Travel Date</label>
          <div className="input-container">
            <input
              type="date"
              name="travelDate"
              className="form-control"
              value={travelDate}
              onChange={this.props.onChange}
              placeholder="Date"
            />
          </div>
          {pageThreeErrors.travelDate ? (
              <span className="error-message">! {pageThreeErrors.travelDate}</span>
            ) : null}
        </div>
      </div>
    )
  }
}

export default Travel;