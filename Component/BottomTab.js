import React from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Feed from '../Screens/Feed';
import CreateStory from '../Screens/createStory';
import { RFValue } from 'react-native-responsive-fontsize';
// Supportive libraries: react-native-gesture-handler  react-native-reanimated react-native-screens @react-native-community/masked-view

const Tab = createMaterialBottomTabNavigator()
export default class BottomTab extends React.Component {
    render() {
        return (

            <Tab.Navigator activeColor={"tomato"}
                inactiveColor={"gray"}
                labeled={false}
                barStyle={styles.bottomTab}
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName
                        if (route.name == 'Feed') {
                            iconName = 'ios-home'
                        } else if (route.name == 'Create a Story') {
                            iconName = 'ios-create'
                        }
                        return <Ionicons name={iconName} size={RFValue(25)} color={color} style={styles.icons} />
                    }
                })}>
                <Tab.Screen name="Feed" component={Feed} />
                <Tab.Screen name="Create a Story" component={CreateStory} />

            </Tab.Navigator>

        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    icons: {
        width: RFValue(30),
        height: RFValue(30)
    },
    bottomTab: {
        height: "8%",
        backgroundColor: '#2f345d',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: 'absolute',
        overflow: 'hidden'
    }


})