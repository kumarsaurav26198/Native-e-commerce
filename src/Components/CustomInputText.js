import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function CustomInputText() {
    return (
        <Text style={[styles.defaultStyle, props.style]}>
            {props.children}
        </Text>
    );
}

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 20,
        color: '#dddddd',
        fontFamily: 'YourCustomFont',
    },
});