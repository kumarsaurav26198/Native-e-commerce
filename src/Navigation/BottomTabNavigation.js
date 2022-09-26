import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, AccountSettings, Social } from '../pages/dashboard/index';
const Tab = createBottomTabNavigator();
export default function BottomTabNavigation() {
    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Social" component={Social} options={{ headerShown: false }} />
                <Tab.Screen name="AccountSettings" component={AccountSettings} options={{ headerShown: false }} />
                {/* <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Social" component={Social} options={{ headerShown: false }} />
                <Tab.Screen name="Account" component={Account} options={{ headerShown: false }} /> */}
            </Tab.Navigator>

        </>
    );
}

const styles = StyleSheet.create({});


