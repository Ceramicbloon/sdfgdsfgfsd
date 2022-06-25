import React from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'
import Drawer from './Component/Drawer'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Dashboard from './Screens/Dashboard'
import Login from './Screens/Login'
import Loading from './Screens/Loading'
import firebase from 'firebase'
import { firebaseConfig } from './config'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

const AppSwitchNavigator = createSwitchNavigator(
  {
    Loading: Loading,
    Login: Login,
    Dashboard: Dashboard

  }
)
const AppNavigator = createAppContainer(AppSwitchNavigator)

export default class App extends React.Component {
  render() {
    return (

      <AppNavigator />

    )
  }

}


