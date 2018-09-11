import React, { Component } from 'react';
import {isEmpty, toLower, toString } from 'lodash';
import './App.css';
import Personal from './components/Personal';
import Family from './components/Family';
import Travel from './components/Travel';

class App extends Component {
  state = {
    name: '',
    email: '',
    phoneNumber: '',
    spouse: false,
    spouseName: '',
    noOfChildren: 0,
    fromLocation: '',
    toLocation: '',
    travelDate: '',
    currentPage: 1,
    pageOneErrors: {},
    pageTwoErrors: {},
    pageThreeErrors: {},
    hasSubmitted: false,
  }
  normalizeNumber = (value) => {
    const onlyNums = value.replace(/[^\d]/g, '');
    return onlyNums;
  };

  // validatePhoneNumber = (phoneNumber) => {
  //   const re = /^(8|9)[0-9]{0,7}$/;
  //   return re.test(toLower(toString(phoneNumber)));
  // }

  validateEmail = (email) => {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(toLower(toString(email)));
  }

  validatePageOne = () => {
    const errors = {};
    if (isEmpty(this.state.name)) {
      errors.name = 'This field may not be blank';
    }
    if (isEmpty(this.state.email)) {
      errors.email = 'This field may not be blank';
    }
    if (!isEmpty(this.state.email) && !this.validateEmail(this.state.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (isEmpty(this.state.phoneNumber)) {
      errors.phoneNumber = 'This field may not be blank';
    }
    // if (isEmpty(this.state.phoneNumber) && !this.validatePhoneNumber(this.state.phoneNumber)) {
    //   errors.phoneNumber = 'Please enter valid phone number';
    // }
    if (!isEmpty(errors)) {
      this.setState({
        pageOneErrors: errors,
      });
      return true;
    }
    return false;
  }

  validatePageTwo = () => {
    const errors = {};
    if (this.state.spouse){
      if (isEmpty(this.state.spouseName)){
        errors.spouseName = "Please enter your spouse's name"
      }
    }
    if (!isEmpty(errors)) {
      this.setState({
        pageTwoErrors: errors,
      });
      return true;
    }
    return false;
  }

  validatePageThree = () => {
    const errors = {};
    if (isEmpty(this.state.fromLocation)) {
      errors.fromLocation = 'This field may not be blank';
    }
    if (isEmpty(this.state.toLocation)) {
      errors.toLocation = 'This field may not be blank';
    }
    if (isEmpty(this.state.travelDate)) {
      errors.travelDate = 'This field may not be blank';
    }
    // if (isEmpty(this.state.phoneNumber) && !this.validatePhoneNumber(this.state.phoneNumber)) {
    //   errors.phoneNumber = 'Please enter valid phone number';
    // }
    if (!isEmpty(errors)) {
      this.setState({
        pageThreeErrors: errors,
      });
      return true;
    }
    return false;
  }

  onCheck = (e) => {
    const spousePresent = this.state.spouse
    this.setState({
      spouse: !spousePresent
    })
  }
  
  onChange = (e) => {
    e.preventDefault();
    if (e.target.name === 'phoneNumber') {
      e.target.value = this.normalizeNumber(e.target.value);
    }
    this.setState({
      [e.target.name]: e.target.value,
    });
    const currentPage = this.state.currentPage
    if (currentPage === 1){
      this.setState({
        pageOneErrors: {
          ...this.state.pageOneErrors,
          [e.target.name]: '',
        },
      });
    } else if (currentPage === 2){
      this.setState({
        pageTwoErrors: {
          ...this.state.pageTwoErrors,
          [e.target.name]: '',
        },
      });
    } else {
      this.setState({
        pageThreeErrors: {
          ...this.state.pageThreeErrors,
          [e.target.name]: '',
        },
      });
    }
    
  }
  nextPage = () => {
    const { currentPage } = this.state
    if (currentPage === 1) {
      if (this.validatePageOne()) {
        return;
      }
    } else if (currentPage === 2 ) {
      if (this.validatePageTwo()) {
        return;
      }
    }
    const newPage = currentPage + 1
    this.setState({
      currentPage: newPage
    })
  }
  prevPage = () => {
    const { currentPage } = this.state
    const newPage = currentPage - 1
    this.setState({
      currentPage: newPage
    })
  }
  renderPage = (page) => {
    switch (page){
      case 1 :
      return (<Personal
        details={this.state}
        onChange={this.onChange}
        pageOneErrors = {this.state.pageOneErrors}
        />);
      case 2 :
      return <Family
        details={this.state}
        onChange={this.onChange}
        onCheck={this.onCheck}
        pageTwoErrors = {this.state.pageTwoErrors}
      />;
      case 3 : 
      return <Travel details={this.state} onChange={this.onChange} />;
      default :
      return null
  }
}
   
  onSubmit = (e) => {
    e.preventDefault();
    if (this.validatePageOne() || this.validatePageTwo() || this.validatePageThree ()){
      return
    }
    console.log(this.state)
    this.setState({
      hasSubmitted: true,
      pageOneErrors: {},
      pageTwoErrors: {},
      pageThreeErrors: {},
    });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Multi Page Form</h1>
        </header>
        {!this.state.hasSubmitted ? (
          <div className="form-container">
            <form onSubmit={this.onSubmit}>
              {this.renderPage(this.state.currentPage)}
              {/* <Personal details={this.state} onChange={this.onChange} /> */}

              <div className="row btn-container">
                {this.state.currentPage === 1 ? null : (
                <div style={{marginRight: 'auto'}}>
                  <button className="btn" type="button" onClick={this.prevPage}>Previous</button>
                </div>
                )}
                {this.state.currentPage === 3 ? null : (
                  <div style={{marginLeft: 'auto'}}>
                    <button className="btn" type="button" onClick={this.nextPage}>Next</button>
                  </div>
                )}
              </div>
              {this.state.currentPage === 3 ? (
              <button className="btn" type="submit">Submit</button>
            ) : null }
            </form>
          </div>
        ) :(
          <div>
            <h2>{this.state.name}</h2>
            <h3>{this.state.email}</h3>
            <h3>{this.state.phoneNumber}</h3>
            <h4>{this.state.spouseName}</h4>
            <h4>{this.state.noOfChildren}</h4>
            <h4>from: {this.state.fromLocation}</h4>
            <h4>to: {this.state.toLocation}</h4>
            <h4>date: {this.state.travelDate}</h4>
          </div>
        )}
      </div>
    );
  }
}

export default App;
