import React from 'react';
import logo from './logo.svg';
import StorageService from './storage';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.setStorage = this.setStorage.bind(this);
    this.getStorage = this.getStorage.bind(this);
  }
  setStorage() {
    const val = Math.floor(Math.random()*10000);
    this.setField.value = `Pending: ${val}`;
    StorageService.setItem('storage-test', val)
      .then((res) => {
        this.setField.value = `Fulfilled: ${val}`;
      }).catch((err) => {
        this.setField.value = `Rejected: ${val}`;
      });
  }
  getStorage() {
    StorageService.getItem('storage-test').then((val) => {
      this.getField.value = val;
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="container mt-5">
            <div className="input-group mb-4">
              <div className="input-group-prepend" onClick={this.setStorage}>
                <span className="input-group-text">Set Value</span>
              </div>
              <input
                type="text"
                ref={(ref) => { this.setField = ref; }}
                defaultValue="Nothing set"
                className="form-control"
              />
            </div>
            
            <div className="input-group">
              <div className="input-group-prepend" onClick={this.getStorage}>
                <span className="input-group-text">Get Value</span>
              </div>
              <input
                type="text"
                ref={(ref) => { this.getField = ref; }}
                defaultValue="Nothing got"
                className="form-control"
              />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
