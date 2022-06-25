import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Profile from '../Screens/Profile'
import { NavigationContainer } from '@react-navigation/native'
import Stacks from './Stack'

const Drawer = createDrawerNavigator()

export default class Draw extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator >

                    <Drawer.Screen name='Home' component={Stacks} />

                    <Drawer.Screen name='Profile' component={Profile} />

                </Drawer.Navigator>
            </NavigationContainer>

        )
    }
}
