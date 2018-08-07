import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';

class Register extends Component
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
                <FormLabel>Email</FormLabel>
                <FormInput/>
                <Button
                    title="Submit"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}
export default Register;