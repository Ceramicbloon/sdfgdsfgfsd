import React from 'react'
import { View, StyleSheet, Button, Text, SafeAreaView, Platform, StatusBar, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { RFValue } from 'react-native-responsive-fontsize'
import { Ionicons } from '@expo/vector-icons'
import * as Speech from 'expo-speech'

var customFont = { 'BubbleGumSans': require('../assets/fonts/BubblegumSans-Regular.ttf') }


export default class Storyscreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fontsLoaded: false,
            speakercolor: 'gray',
        }
    }
    initiatetts = async (title, author, date, story, moral) => {
        this.state.speakercolor === 'gray' ? this.setState({ speakercolor: 'red' }) : this.setState({ speakercolor: 'gray' })
        this.state.speakercolor === 'red' ?
            Speech.stop() : Speech.speak(`${title} ,by ${author} ${date} ${story} the moral of the story is ${moral}`)

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
                        <View style={styles.stitle}>
                            <Text style={styles.titletext}>Storytelling App</Text>
                        </View>
                    </View>
                    <View style={styles.cardcontainer}>
                        <ScrollView>

                            <Image source={require('../assets/story_image_1.png')} style={styles.image}></Image>
                            <View style={styles.dataContainer}>
                                <View style={styles.aaaaaaa}>
                                    <Text style={styles.title}>{this.props.route.params.story.title}</Text>
                                    <Text style={styles.author}>{this.props.route.params.story.author}</Text>
                                    <Text style={styles.author}>{this.props.route.params.story.created_on}</Text>

                                </View>
                                <View style={styles.iconContainer}>
                                    <TouchableOpacity onPress={() => this.initiatetts(
                                        this.props.route.params.story.title,
                                        this.props.route.params.story.author,
                                        this.props.route.params.story.created_on,
                                        this.props.route.params.story.story,
                                        this.props.route.params.story.moral)}>
                                        <Ionicons name={"volume-high-outline"} size={RFValue(25)} color={this.state.speakercolor} style={styles.icons} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={styles.story}> {this.props.route.params.story.story}</Text>
                            <Text style={styles.moral}> {this.props.route.params.story.moral}</Text>
                        </ScrollView>
                    </View>





                </View>)
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
        paddingLeft: RFValue(20),


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

    }, story: {
        color: 'white',
        fontSize: RFValue(13),
        fontFamily: 'BubbleGumSans',
        paddingLeft: RFValue(20),
        marginTop: RFValue(20)

    }, moral: {
        color: 'white',
        fontSize: RFValue(13),
        fontFamily: 'BubbleGumSans',
        paddingLeft: RFValue(20),
        marginTop: RFValue(20)
    }, safeAreaContainer: {
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
    stitle: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center'

    },
    titletext: {


        fontFamily: 'BubbleGumSans',
        color: 'white',
        fontSize: 40
    }, cardcontainer: {
        flex: 0.85
    },
    dataContainer: {
        flexDirection: "row"

    }, icons: {
        width: RFValue(30),
        height: RFValue(30)
    }, iconContainer: {
        alignContent: "center",
        justifyContent: "center",
        flex: 0.2

    }, aaaaaaa: {
        flex: 0.8
    }





})