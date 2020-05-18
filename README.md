# 'UdaciCards' App

'UdaciCards' app, allows you to create quiz decks and add questions to them. You can start quiz mode to test your knowledge about a specific desk. Have fun! :)  


## Testing
- The app is tested on `iPhone 8 Plus` using `expo` app.

## Prerequisites

- This project requires `node v8.9.0` or higher and `expo-cli` to set up and run.
- An iPhone with `expo` app installed

## Setting up the project

- Clone this repository on a local or remote computer
- `cd` into the project directory 
- Run `npm install` to set up project dependencies

## Running the project

- Run `npm start` to run the project
- Wait for `expo` to start metro bundler to start and display a barcode 
- Open `Camera` app on your iPhone and scan the barcode displayed in step above
- The camera app should prompt you to open the link with `expo` app.

## Acknowledgements

- This project is developed using [react](https://github.com/facebook/react) and [react-native](https://github.com/facebook/react-native)

## Key Dependencies
- [expo](https://expo.io/)
- [react-navigation](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [redux](https://github.com/facebook/prop-types)
- [react-redux](https://github.com/reduxjs/react-redux)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)

## License

MIT


## Note

The mechanism used in the app to schedule repeatitive notifications is deprecated for iOS. According to [Expo documentation](https://docs.expo.io/versions/latest/sdk/notifications/#notificationsschedulelocalnotificationasynclocalnotification-schedulingoptions), however, this is still the way to schedule notifications. 