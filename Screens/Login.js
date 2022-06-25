import React from 'react'
import { Text, Button, View } from 'react-native'
import firebase from 'firebase'
import * as Google from 'expo-google-app-auth'


export default class Login extends React.Component {
    render() {
        return (
            <View><Button title="Log in with google" onPress={() => this.signInWithGoogleAsync()}></Button></View>
        )
    }
    signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                behaviour: 'web',
                androidClientId: '593197877144-7ni8hmec9oiqgbolnna6mu14qso9g6dj.apps.googleusercontent.com',
                iosClientId: '593197877144-lg5jkk6s566cdvvoi80des977ntckgpo.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });
            if (result.type === 'success') {

                this.onSignIn(result)
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }
    onSignIn = (googleUser) => {
        var unsubscribe = firebase.auth().onAuthStateChanged(firebaseuser => {
            unsubscribe()
            if (!this.isUserEqual(googleUser, firebaseuser)) {
                var credential = firebase.auth.GoogleAuthProvider.credential(googleUser.idToken, googleUser.accessToken)
                firebase.auth().signInWithCredential(credential).then(function (result) {
                    if (result.additionalUserInfo.isNewUser) {
                        firebase.database().ref('/users/' + result.user.uid).set({
                            gmail: result.user.email,
                            profilePicture: result.additionalUserInfo.profile.picture,
                            firstName: result.additionalUserInfo.profile.given_name,
                            lastName: result.additionalUserInfo.profile.family_name,
                            locale: result.additionalUserInfo.profile.locale,
                            currentTheme: 'dark'
                        })

                    } else {
                        console.log('user already signed in')
                    }
                })
            }

        })

    }
}

