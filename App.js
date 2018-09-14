
import React from 'react';
import { 
  Alert, 
  Button,
  Text, 
  TextInput, 
  View
   } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import codePush from "react-native-code-push";

class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  onButtonPress = () => {
    Alert.alert('You tapped the button!');
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text 
          style={{
            fontSize: 20,
            fontWeight: 'bold'
          }} 
        >
        Your Name 
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type name here!"
          onChangeText={(text) => this.setState({text})}
        />
        <Button
          onPress={this.onButtonPress}
          title="Press Me"
        />
      </View>
    );
  }
}

class Page1Screen extends React.Component {
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
    welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        title: 'Welcome'
      }
    },
    page1: {
      screen: Page1Screen,
      navigationOptions: {
        title: 'Page1',
        headerStyle: {
          backgroundColor: '#f0079e',
        },
      }
    }
  },
  {
    initialRouteName: 'welcome',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
    }
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