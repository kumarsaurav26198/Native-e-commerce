import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import SearchInput from '../../../components/common/SearchInput';
import CustomButton from '../../../components/common/CustomButton';


export default function Social({ navigation }) {
    return (
        <>
            <SearchInput />
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Social</Text>
                <CustomButton title="Button  Click Me" backgroundColor="red" />
                {/* <View>
                <Button
                title="Go To ProfileScreen"
                onPress={() => navigation.navigate('ProfileScreen')}
                />
                </View>
                <View>
                <Button
                title="Go To HomeScreen"
                onPress={() => navigation.navigate('HomeScreen')}
                />
                </View>
                <View>
                <Button
                title="Go To Account"
                onPress={() => navigation.navigate('Account')}
                />
                </View>
            <View>
            <Button
                    title="Go To Social"
                    onPress={() => navigation.navigate('Social')}
                    />
                </View> */}
            </View>
        </>
    );
}

const styles = StyleSheet.create({});