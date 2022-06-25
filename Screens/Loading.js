import React from 'react'
import { Text } from 'react-native'
import firebaseConfig from '../config'
import firebase from firebase

export default class Loading extends React.Component {
    render() {
        return (
            <Text>Loading</Text>
        )
    }
    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(
            user => {
                if (user) {
                    this.props.navigation.navigate('Dashboard')
                } else {
                    this.props.navigation.navigate('Login')
                }
            }
        )

    }
    componentDidMount() {
        this.checkIfLoggedIn()
    }
}

