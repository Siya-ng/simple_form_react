import React, { Component } from 'react';

const childrenOption = [ 0, 1, 2, 3, 4, 5]
class Family extends Component {

  render (){
    const { spouse, spouseName, noOfChildren, pageTwoErrors } = this.props.details
    return (
      <div>
        <div className="row form-group">
          <input
            className="form-check-input"
            name="spouse"
            type="checkbox"
            id="spouseCheckBox"
            value={spouse}
            onChange={this.props.onCheck}
          />
          <label className="form-check-label" htmlFor="spouseCheckBox">Spouse</label>
        </div>
        {spouse ? (
          <div className="row form-group">
            <label className="form-label">Spouse Name</label>
            <div className="input-container">
              <input
                type="text"
                name="spouseName"
                className="form-control"
                value={spouseName}
                onChange={this.props.onChange}
                placeholder="Spouse Name"
              />
            </div>
            {pageTwoErrors.spouseName ? (
              <span className="error-message">! {pageTwoErrors.spouseName}</span>
            ) : null}
          </div>
        ) : null }
       <div className="row form-group">
          <label  className="form-label" htmlFor="noOfChildren">Number of Children</label>
          <div className="input-container">
            <select
              name="noOfChildren"
              className="form-control"
              id="noOfChildren"
              onChange={this.props.onChange}
              value={noOfChildren}
            >
              {childrenOption.map((number) => <option key={`${number}child `}value={number}>{number}</option>)}
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default Family;