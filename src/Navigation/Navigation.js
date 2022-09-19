
import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../Screens/SignUp';
import Login from '../Screens/Login';
import Dashboard from '../Screens/Dashboard';
import ProductScreen from '../pages/productScreen/ProductScreen';
import ProductDetails from '../pages/productDetails/ProductDetails';

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

export const SignedInStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='ProductScreen'

            >
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="ProductScreen" component={ProductScreen}
                    options={{
                        title: 'Products',
                        headerTitleStyle: styles.headerTitle,
                        // headerBackVisible: true,
                        headerRight: () => <Text>Cart</Text>,
                    }}
                />
                <Stack.Screen name="ProductDetails" component={ProductDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export const SignedOutStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Login'
                screenOptions={screenOptions}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="ProductScreen" component={ProductScreen} />
                <Stack.Screen name="ProductDetails" component={ProductDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 20
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'black',
    },
    headerStyle: {
        backgroundColor: '#f4511e',
    },
});