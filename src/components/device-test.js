import React from 'react';
import { Plugins } from '@capacitor/core';

const { Device } = Plugins;

class DeviceTest extends React.Component {
  constructor(props) {
    super(props);
    this.getDeviceInfo = this.getDeviceInfo.bind(this);
  }
  getDeviceInfo() {
    Device.getInfo().then((info) => {
      this.infoField.value = JSON.stringify(info, undefined, 4);
    }).catch((err) => {
      this.infoField.value = `Error: ${err}`;
    });
  }
  render() {
    return (
      <div className="w-100">
        <button className="btn btn-primary w-100 mb-4" onClick={this.getDeviceInfo}>Get Device Info</button>
        <textarea
          ref={(ref) => { this.infoField = ref; }}
          placeholder="Not run yet"
          className="form-control"
          rows={10}
          disabled
        />
      </div>
    );
  }
}

export default DeviceTest;
