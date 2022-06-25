import React from 'react'
import { View, StyleSheet, Button, Text, SafeAreaView, Platform, StatusBar, Image, FlatList, ScrollView } from 'react-native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import Storycard from './Storycard'
const stories = require('./temp_stories.json')
var customFont = { 'BubbleGumSans': require('../assets/fonts/BubblegumSans-Regular.ttf') }
export default class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fontsLoaded: false
        }
    }


    render() {
        if (this.state.fontsLoaded) {
            return (

                <View style={styles.container}>
                    <SafeAreaView style={styles.safeAreaContainer} />
                    <View style={styles.apptitle}>
                        <View style={styles.appicon}>
                            <Image source={require('../assets/logo.png')} style={styles.logo} />
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.titletext}>Storytelling App</Text>
                        </View>
                    </View>
                    <View style={styles.cardcontainer}>
                        <FlatList data={stories} keyExtractor={this.keyExtractor} renderItem={this.renderItem} ></FlatList>
                    </View>
                </View>

            )
        } else {
            return <AppLoading />
        }
    }
    async loadFonts() {
        await Font.loadAsync(customFont)
        this.setState({ fontsLoaded: true })
    }

    componentDidMount() {
        this.loadFonts()

    }

    keyExtractor = (item, index) => {
        index.toString()
    }

    renderItem = ({ item }) => {
        return <Storycard story={item} navigation={this.props.navigation} />
    }
}






const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#15193c'
    },

    safeAreaContainer: {
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
    apptitle: {
        flexDirection: 'row',
        flex: 0.08,
        justifyContent: 'center'
    },
    logo: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    },
    appicon: {
        flex: 0.3
    },
    title: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center'

    },
    titletext: {


        fontFamily: 'BubbleGumSans',
        color: 'white',
        fontSize: 40
    },
    cardcontainer: {
        flex: 0.85
    }


})