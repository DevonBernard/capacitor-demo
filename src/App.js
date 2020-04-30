import React from 'react';
import logo from './logo.svg';
import StorageTest from './components/storage-test';
import PushTest from './components/push-test';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="container">
            <div className="row mx-0 mb-3 pb-3 border-bottom">
              <h3 className="mx-auto">Storage Test</h3>
              <StorageTest />
            </div>
            <div className="row mx-0 mb-3 pb-3 border-bottom">
              <h3 className="mx-auto">Push Test</h3>
              <PushTest />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
