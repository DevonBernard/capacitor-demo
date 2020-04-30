# DWB Capacitor Demo

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
