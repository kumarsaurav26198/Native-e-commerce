import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function CustomText({ text }) {
    return (
        <View>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "black",
        fontSize: 24,
        fontFamily: "fantasy",
        fontWeight: "bold",
        paddingHorizontal: 15,
        paddingVertical: 5
    }
});