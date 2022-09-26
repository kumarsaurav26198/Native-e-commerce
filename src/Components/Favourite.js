import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

export function Favourite({ name, price, image, onPress }) {
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
        paddingHorizontal: 4,
        // backgroundColor: 'white',
        // borderRadius: 16,
        // shadowOpacity: 0.2,
        // shadowRadius: 4,
        // shadowColor: 'black',
        // shadowOffset: {
        //     height: 0,
        //     width: 0,
        // },
        // elevation: 1,
        // marginVertical: 20,
        // width: 40
    },
    thumb: {
        height: 150,
        borderRadius: 100,
        width: 150,
        backgroundColor: 'white',
        objectFit: 'contain'

    },
    infoContainer: {
        // padding: 16,
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
