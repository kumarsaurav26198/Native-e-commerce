import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { title, onPress } = this.props;
        return (
            <TouchableOpacity onPress={() => onPress()} style={styles.button} >
                <View style={styles.mainContainer}>
                    <Text style={styles.textStyle}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default Button;

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 30,
        marginBottom: 10

    },
    mainContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 50,
        height: 50,
        marginBottom: 5,
        width: "85%",
        paddingHorizontal: 6,
        backgroundColor: 'green',
        margin: 10,
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "white"
    },
});