import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

export function Banner({ name, price, image, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image
                style={styles.thumb}
                source={image}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>Rs..  {price} ₹</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1,
        marginHorizontal: 5,
        width: 360,

    },
    thumb: {
        height: 160,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        width: '100%',
        // height: "100%"
    },
    infoContainer: {
        padding: 5,
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
});