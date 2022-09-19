import { View, Text } from 'react-native';
import React, { Component, useState } from 'react';
import TextInputComponent from '../components/TextInput';
import Button from '../components/Button';
import { TouchableOpacity } from 'react-native';
import { LoginUser } from '../Firebase/LoginUser';
import LinearGradient from 'react-native-linear-gradient';

class Login extends Component {
    state = {
        email: "",
        password: "",
    };

    LogintoFirebase = () => {
        LoginUser(this.state.email, this.state.password).
            then(() => {
                alert('LoggedIn successfully');
            }).catch((err) => {
                alert(err);
            });
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient style={{ flex: 1 }} colors={['rgba(243,124,250, 0.6)', 'rgba(255,186,99, 0.6)']}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TextInputComponent placeholder="Enter Email" updateFields={(text) => this.setState({ email: text })} />
                        <TextInputComponent placeholder="Enter Password" updateFields={(text) => this.setState({ password: text })} />
                        <Button title="Login" onPress={() => { this.LogintoFirebase(); }} />
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('SignUp'); }}>
                            <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>New User ? Click Here</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}

export default Login;