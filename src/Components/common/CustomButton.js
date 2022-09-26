import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = ({ onPress, title, onClick, bgColor, textColor }) => {
    return (
        <TouchableOpacity onPress={onPress} onClick={onClick} style={{ backgroundColor: { bgColor } }}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    appButtonContainer: {
        // backgroundColor: { bgColor }
        // elevation: 8,
        // backgroundColor: bgColor,
        // borderRadius: 10,
        // paddingVertical: 4,
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        // textTransform: "uppercase"
    }
});