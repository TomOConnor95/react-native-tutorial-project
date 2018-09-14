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

// import { createStore } from 'redux';

// // Store creation
// // EDIT_EXPENSE
// export const editName = (name) => ({
//   type: 'EDIT_NAME',
//   name
// });


// defaultNameState = {
//   name: ''
// }
// const nameReducer =  (state = defaultNameState, action) => {
//   switch (action.type) {
//     case 'EDIT_NAME':
//       return [
//         ...state,
//         action.name
//       ];
//     default:
//       return state;
//     }
//   };

// const store = createStore(
//     {
//       name: nameReducer,
//     }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );


class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      buttonDisabled: true
    };
  }
  onButtonPress = () => {
    
    Alert.alert(this.state.text);
    // this.props.dispatch(editName(name))
    
    this.props.navigation.navigate('page1')
  }
  onInputChangeText= (text) => {
    if ((text.length > 0)) {
      if (this.state.buttonDisabled) {
        console.log('should enable button')
        this.setState(() => ({ buttonDisabled: false }));
      } 
    } else {
      if (!this.state.buttonDisabled) {
        this.setState({buttonDisabled: true });
      } 
    }
    this.setState({text})
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
          style={{height: 40, fontSize: 20}}
          placeholder="Type name here!"
          onChangeText={this.onInputChangeText}
        />
        <Button
          onPress={this.onButtonPress}
          disabled={this.state.buttonDisabled}
          title="Get Started"
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