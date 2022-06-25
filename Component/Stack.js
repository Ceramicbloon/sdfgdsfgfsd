import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Storyscreen from '../Screens/Storyscreen';
import BottomTab from './BottomTab'


export default class Stacks extends React.Component {
    render() {
        return (


            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Home' component={BottomTab} ></Stack.Screen>
                <Stack.Screen name='Storyscreen' component={Storyscreen}></Stack.Screen>
            </Stack.Navigator>

        )
    }


}

const Stack = createStackNavigator()

