import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchInput from '../../../components/common/SearchInput';
export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <SearchInput />

        </View>
    );
}

const styles = StyleSheet.create({});
