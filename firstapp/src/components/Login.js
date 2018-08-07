import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';

class Login extends Component
{
    render() 
    {
        return (
            <View
                style=
                {{
                    flex: 1,
                    // alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <FormLabel>Username</FormLabel>
                <FormInput/>
                <FormLabel>Password</FormLabel>
                <FormInput secureTextEntry={true}/>
                <Button
                    title="Silahkan Masuk"
                    onPress={() => this.props.navigation.navigate('Data')}
                />
                <Button
                    title="Ke Halaman Register"
                    color="green"
                    onPress={() => this.props.navigation.navigate('Register')}
                />
            </View>
        );
    }
}
export default Login;