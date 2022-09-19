import { View, Text } from 'react-native';
import React, { Component, useState } from 'react';
import TextInputComponent from '../components/TextInput';
import Button from '../components/Button';
import { SignUpUser } from '../Firebase/SignUpUser';
import { AddUser } from '../Firebase/Users';
import { auth } from '../Firebase/firebaseConfig';


class SignUp extends Component {

    state = {
        name: "",
        email: "",
        password: "",
    };
    SignUptoFirebase = () => {
        SignUpUser(this.state.email, this.state.password).
            then((res) => {
                console.log('res', res);
                var userUID = auth.currentUser.uid;
                AddUser(userUID, this.state.name, this.state.email, '',).
                    then(() => {
                        alert('Success');
                        this.props.navigation.navigate('ProductScreen');
                    }).
                    catch((error) => {
                        console.log("def", error);
                    });
                console.log(userUID);
            }).
            catch((err) => {
                console.log("abc", err);
            });
    };
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
                <TextInputComponent placeholder="Enter Name" updateFields={(text) => this.setState({ name: text })} />
                <TextInputComponent placeholder="Enter Email" updateFields={(text) => this.setState({ email: text })} />
                <TextInputComponent placeholder="Enter Password" updateFields={(text) => this.setState({ password: text })} />
                <Button title="Sign Up" onPress={() => { this.SignUptoFirebase(); }} />
            </View>
        );
    }
}

export default SignUp;