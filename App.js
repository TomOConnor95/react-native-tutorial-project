
import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import codePush from "react-native-code-push";

class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Your Name</Text>
      </View>
    );
  }
}

class Page1Screen extends React.Component {
  static navigationOptions = {
    title: 'Page 1',
    headerStyle: {
      backgroundColor: '#f0079e',
    },
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Put name here</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Page1: Page1Screen,
  },
  {
    initialRouteName: 'Welcome',
  }
);


class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const codePushOptions = { 
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.IMMEDIATE
};


export default codePush(codePushOptions)(App);