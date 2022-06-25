import React from 'react'
import { View, StyleSheet, Button, Text, SafeAreaView, Platform, StatusBar, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { RFValue } from 'react-native-responsive-fontsize'
import Storyscreen from './Storyscreen'

var customFont = { 'BubbleGumSans': require('../assets/fonts/BubblegumSans-Regular.ttf') }


export default class Storycard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fontsLoaded: false
        }
    }
    render() {
        if (this.state.fontsLoaded) {
            return (<TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate('Storyscreen', {
                story: this.props.story
            })}>
                <View style={styles.cardcontainer}>
                    <Image source={require('../assets/story_image_1.png')} style={styles.image}></Image>
                    <Text style={styles.title}>{this.props.story.title}</Text>
                    <Text style={styles.author}>{this.props.story.author}</Text>
                    <Text style={styles.description}> {this.props.story.description}</Text>

                </View>


            </TouchableOpacity>)
        }
        else {
            return (
                <AppLoading></AppLoading>
            )
        }
    }
    async loadFonts() {
        await Font.loadAsync(customFont)
        this.setState({ fontsLoaded: true })
    }
    componentDidMount() {
        this.loadFonts()
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#15193c'
    },
    cardcontainer: {
        margin: RFValue(10),
        backgroundColor: '#2f345d',
        borderRadius: RFValue(20)
    },
    image: {
        justifyContent: 'center',
        alignSelf: 'center',
        height: RFValue(250),
        resizeMode: 'contain',
        width: '95%'

    },
    title: {
        color: 'white',
        fontSize: RFValue(26),
        fontFamily: 'BubbleGumSans',
        paddingLeft: RFValue(20)

    }, author: {
        color: 'white',
        fontSize: RFValue(18),
        fontFamily: 'BubbleGumSans',
        paddingLeft: RFValue(20)

    }, description: {
        color: 'white',
        fontSize: RFValue(13),
        fontFamily: 'BubbleGumSans',
        paddingLeft: RFValue(20)

    }





})