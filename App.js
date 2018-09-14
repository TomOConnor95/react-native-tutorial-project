
import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

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

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
