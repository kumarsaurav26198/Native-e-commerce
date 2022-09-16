import { Text, View } from 'react-native';
import React, { Component } from 'react';
import Button from '../Components/Button';
import { TouchableOpacity } from 'react-native';
import { auth } from '../Firebase/firebaseConfig';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import { getDatabase } from "firebase/database";
import LinearGradient from 'react-native-linear-gradient';


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

    // async componentDidMount() {
    //     const db = getDatabase();
    //     const ref = db.ref('https://chatapp-d8f8f-default-rtdb.firebaseio.com/');
    //     await ref.on('value', (snapshot) => {
    //         let users = [];
    //         snapshot.forEach((child) => {
    //             users.push({
    //                 userName: child.val().name,
    //             });
    //         });
    //         this.setState({ allUsers: users })
    //     })
    // }

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
                <LinearGradient style={{ flex: 1 }} colors={['rgba(243,124,250, 0.6)', 'rgba(255,186,99, 0.6)']}>
                    <Button title="SignOut" onPress={() => { this.handleSignOut(); }} />
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>DASHBOARD</Text>
                    </View>
                    <View>
                    </View>
                    <FlatList
                        alwaysBounceVertical={false}
                        data={this.state.allUsers}
                        style={{ padding: 5 }}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: (item.id) % 2 == 0 ? 'white' : 'lightseagreen', borderRadius: 10, marginBottom: 10, padding: 10 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ height: 60, width: 60, borderRadius: 30 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-CP7ChC_RjSlZcIC59_FH4KBl41Enn74Zw&usqp=CAU' }} />
                                </View>
                                <View style={{ width: '88%', alignItems: 'flex-start', justifyContent: 'center', marginLeft: 10 }}>
                                    <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </LinearGradient>

            </View>
        );
    }
}

export default Dashboard;