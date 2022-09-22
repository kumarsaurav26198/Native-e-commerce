import { Text, View } from 'react-native';
import React, { Component } from 'react';
import Button from '../components/Button';
import { TouchableOpacity } from 'react-native';
import { auth } from '../firebase/firebaseConfig';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import SearchInput from '../components/common/SearchInput';
// import { getDatabase } from "firebase/database";


export class Dashboard extends Component {

    state = {
        // allUsers: [
        //     {
        //         id: 1,
        //         name: "Shanu"
        //     },
        //     {
        //         id: 2,
        //         name: "Shanu"
        //     },
        //     {
        //         id: 3,
        //         name: "Shanu"
        //     },
        //     {
        //         id: 4,
        //         name: "Shanu"
        //     },
        //     {
        //         id: 5,
        //         name: "Shanu"
        //     },
        //     {
        //         id: 6,
        //         name: "Shanu"
        //     },
        //     {
        //         id: 7,
        //         name: "Shanu"
        //     },
        //     {
        //         id: 8,
        //         name: "Shanu"
        //     },
        //     {
        //         id: 9,
        //         name: "Shanu"
        //     },
        //     {
        //         id: 10,
        //         name: "Shanu"
        //     },
        //     {
        //         id: 11,
        //         name: "Shanu"
        //     },
        //     {
        //         id: 12,
        //         name: "Shanu"
        //     }
        // ]
    };

    async componentDidMount() {
        const db = getDatabase();
        const ref = db.ref('https://chatapp-d8f8f-default-rtdb.firebaseio.com/');
        await ref.on('value', (snapshot) => {
            let users = [];
            snapshot.forEach((child) => {
                users.push({
                    userName: child.val().name,
                });
            });
            this.setState({ allUsers: users });
        });
    }

    handleSignOut = async () => {
        try
        {
            await auth.signOut().then(() => {
                alert('Log out successfully');
            });
        } catch (error)
        {
            alert(error);
        }
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SearchInput />


                <Button title="Sign Out" onPress={() => { this.handleSignOut(); }} />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>DASHBOARD</Text>
                </View>
                <View>
                </View>
            </View>
        );
    }
}

export default Dashboard;