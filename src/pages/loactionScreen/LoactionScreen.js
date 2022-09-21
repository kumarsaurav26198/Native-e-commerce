import { StyleSheet, View } from 'react-native';
import React from 'react';
import CustomButton from '../../components/common/CustomButton';
import MapView from 'react-native-maps';

const LoactionScreen = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                {/* <MapView
                    style={styles.map}
                // region={{
                //     latitude: 37.78825,
                //     longitude: -122.4324,
                //     latitudeDelta: 0.015,
                //     longitudeDelta: 0.0121,
                // }}
                >
                </MapView> */}
            </View>
            <View style={styles.backButtonContainer}>
                <CustomButton title={"confirm  loaction"} onPress={() => navigation.navigate("ShoppingCartScreen")} />
            </View>
        </>
    );
};

export default LoactionScreen;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    backButtonContainer: {
        bottom: 20,
        marginHorizontal: 10,
        backgroundColor: "#3293fe",
        borderRadius: 25,
        padding: 10,
        marginTop: 30,
        width: "90%"
    },
});