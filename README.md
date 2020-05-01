# Capacitor Plugin Demo

This is a demo of Capacitor Plugins (Device, Storage, PushNotifications) in an Ionic + ReactJS environment. This demo application provides a one-page interface to quickly test, observe, and debug how each of these Plugins are initialized and trigger callbacks.

- **Device Plugin**: Access device information such as: operating system, OS version, uuid, device name, memory size, memory used.
- **Storage Plugin**: Save data in device memory to persist while app is pushed into background or is closed. Storage items will be accessible when reopening the app.
- **Push Notifications Plugin**: Request user permission to receive remote push notifications. I've also added the capacitor-fcm library to automatically convert iOS APN tokens into FCM tokens which can be used with Firebase cloud messaging.

<p align="center">
  <img src="https://i.imgur.com/KTsVreB.png" width="500">
</p>

## Setup Steps

`git clone https://github.com/DevonBernard/capacitor-demo`

`cd capacitor-demo`

`npm install`

`npm run build`

`npx cap sync && npx cap copy`

## Test Steps
### Verify works on web
`npm run start` (Open Browser to http://localhost:3000/)

### Verify works on iOS

`npm run build && npx cap sync && cd ios/app && pod install && cd ../../ && npx cap copy && npx cap open ios`
