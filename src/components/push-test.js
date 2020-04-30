import React from 'react';
import { Plugins } from '@capacitor/core';
import { FCM } from "capacitor-fcm";

const { PushNotifications } = Plugins;
const fcm = new FCM();

class PushTest extends React.Component {
  constructor(props) {
    super(props);
    this.registerPushNotifications = this.registerPushNotifications.bind(this);
  }
  registerPushNotifications() {
    this.infoField.value = "PN Registration Attempt...\n";
    PushNotifications.requestPermission().then(result => {
      this.infoField.value +=  "PN Request Fulfilled...\n";
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        this.infoField.value += "PN Request Granted...\n";
        PushNotifications.register();
      } else {
        // Show some error
        this.infoField.value += "PN Request Not Granted...\n";
      }
    }).catch(err => {
      this.infoField.value += `PN Request Rejected (${err})\n`;
    });

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token) => {
        this.infoField.value += `PN Registration Successful: '${token.value}'\n`;
        try {
          this.infoField.value += 'Attempting APN (iOS) to FCM conversion\n';
          fcm.getToken().then(r => {
            this.infoField.value += `APN->FCM Conversion Successful. FCM Token: '${r.token}'\n`;
            console.log(`iOS FCM: ${r.token}`);
          });
        } catch (err) {
          // device is Android
          this.infoField.value += `APN Registration Failed. Android Token: ${token.value}\n`;
          console.log(`Android FCM: ${token.value}`)
        }
      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
      (error) => {
        this.infoField.value += 'Error on registration: ' + JSON.stringify(error) + '\n';
      }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      (notification) => {
        this.infoField.value += 'Push received: ' + JSON.stringify(notification) + '\n';
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification) => {
        this.infoField.value += 'Push action performed: ' + JSON.stringify(notification) + '\n';
      }
    );
  }
  render() {
    return (
      <div className="w-100">
        <button className="btn btn-primary w-100 mb-4" onClick={this.registerPushNotifications}>Register Push Notifications</button>
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

export default PushTest;
