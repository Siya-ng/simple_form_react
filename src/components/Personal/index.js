import React, { Component } from 'react';

class Personal extends Component {

  render (){
    const { fullName, email, phoneNumber, pageOneErrors } = this.props.details
    return (
      <div>
        <div className="row form-group">
          <label className="form-label">Name</label>
          <div className="input-container">
            <input 
              type="text"
              name="name"
              className="form-control"
              value={fullName}
              onChange={this.props.onChange}
              placeholder="Name"
            />
          </div>
          {pageOneErrors.name ? (
              <span className="error-message">! {pageOneErrors.name}</span>
            ) : null}
        </div>
        <div className="row form-group">
          <label className="form-label">Email</label>
          <div className="input-container">
            <input
              type="text"
              name="email"
              className="form-control"
              value={email}
              onChange={this.props.onChange}
              placeholder="Email Address"
            />
          </div>
          {pageOneErrors.email ? (
              <span className="error-message">! {pageOneErrors.email}</span>
            ) : null}
        </div>
        <div className="row form-group">
          <label className="form-label">Phone Number</label>
          <div className="input-container">
            <input
              type="text"
              name="phoneNumber"
              className="form-control"
              value={phoneNumber}
              onChange={this.props.onChange}
              placeholder="Phone Number"
            />
          </div>
          {pageOneErrors.phoneNumber ? (
              <span className="error-message">! {pageOneErrors.phoneNumber}</span>
            ) : null}
        </div>
      </div>
    )
  }
}

export default Personal;