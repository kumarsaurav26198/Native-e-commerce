import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function DashboardButton() {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            <View style={{ height: 50, backgroundColor: 'powderblue' }} />
            <View style={{ flex: 1, backgroundColor: 'skyblue' }} />
            <View style={{ height: 50, backgroundColor: 'steelblue' }} />
        </View>
    );
}
