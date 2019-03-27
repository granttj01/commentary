#  Commentary
React-Native application for sport commentary using TypeScript.


## Pre-requisites

 [Installation instructions](http://facebook.github.io/react-native/docs/getting-started.html) - Select the Building Projects with Native Code tab

**Dependencies:**
  * node - `brew install node`
  * watchman - `brew install watchman`
  * React-native-cli - `npm install -g react-native-cli`
  * json-server (for local api using db.json) - `npm install -g json-server`

**IOS:** Install xcode via App Store. Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app. Also make sure the xcode command line tools are installed from the xcode preferences locations tab.

**Android:** Genymotion android simulator:
  1. Genymotion relies on Oracle VM VirtualBox, so install [VirtualBox](https://www.virtualbox.org/wiki/Downloads) first.
  2. [Sign up on Genymotion](https://www.genymotion.com/account/create/)
  3. You should then be taken to the [downloads](https://www.genymotion.com/download/) page

## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the dependencies with `yarn` or `npm i`
 


## :arrow_forward: How to Run App

1. cd to the repo.
2. Ensure you have json-server running `json-server --watch db.json`
3. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * Run Genymotion
    * run `react-native run-android`
