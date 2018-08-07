import React, { Component } from 'react';
import { createStackNavigator, HeaderBackButton } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Login from './src/components/Login';
import Register from './src/components/Register';
import Data from './src/components/Data';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Login,
      navigationOptions: ({navigation}) => ({ //don't forget parentheses around the object notation
        header: null
      })
    },
    Register: {
      screen: Register,
      navigationOptions: ({navigation}) => ({ //don't forget parentheses around the object notation
        header: null
      })
    },
    Data: {
      screen: Data,
      navigationOptions: ({navigation}) => ({ //don't forget parentheses around the object notation
        title: 'Log-out',
        headerLeft: <Icon
                iconStyle={{marginLeft:10, transform:[{rotate:'180deg'}]}}
                name='sign-out'
                type='font-awesome'
                color='#f50'
                onPress={() => navigation.navigate('Home')} />
      })
    }
  },
  {
    initialRouteName: 'Home',
  }
);

class App extends Component
{
  render()
  {
    return (
      <RootStack/>
    );
  }
}
export default App;