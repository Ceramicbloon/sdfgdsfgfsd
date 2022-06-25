import React from 'react'
import { View, StyleSheet, Button, Text, TextInput, Image, SafeAreaView, Platform, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import { render } from 'react-dom'
import { RFValue } from 'react-native-responsive-fontsize'
import DropDownPicker from 'react-native-dropdown-picker'
var customFont = { 'BubbleGumSans': require('../assets/fonts/BubblegumSans-Regular.ttf') }



export default class CreateStory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fontsLoaded: false,
            previewImage: 'image1',
            dropdownheight: 40
        }
    }
    render() {
        if (this.state.fontsLoaded) {
            var images = {
                image1: require('../assets/story_image_1.png'),
                image2: require('../assets/story_image_2.png'),
                image3: require('../assets/story_image_3.png'),
                image4: require('../assets/story_image_4.png'),
                image5: require('../assets/story_image_5.png'),
            }
            return (

                <View style={styles.container}>
                    <SafeAreaView style={styles.safeAreaContainer} />
                    <View style={styles.apptitle}>
                        <View style={styles.appicon}>
                            <Image source={require('../assets/logo.png')} style={styles.logo} />
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.titletext}>Create a story</Text>
                        </View>
                    </View>

                    <View style={styles.inputcontainer}>
                        <ScrollView>
                            <Image source={images[this.state.previewImage]} style={styles.image} />
                            <DropDownPicker items={[
                                { label: 'Image 1', value: 'image1' },
                                { label: 'Image 2', value: 'image2' },
                                { label: 'Image 3', value: 'image3' },
                                { label: 'Image 4', value: 'image4' },
                                { label: 'Image 5', value: 'image5' }]}
                                onOpen={() => {
                                    this.setState({ dropdownheight: 300 })
                                }}
                                onClose={() => {
                                    this.setState({ dropdownheight: 40 })
                                }}
                                onChangeItem={(item) => {
                                    this.setState({ previewImage: item.value })
                                }}
                                defaultValue={this.state.previewImage}
                                containerStyle={{
                                    justifyContent: 'center',
                                    height: 40,


                                }} style={{
                                    backgroundColor: 'transparent',

                                }}
                                labelStyle={{
                                    color: 'white',
                                    fontFamily: 'BubbleGumSans'
                                }}
                                dropDownStyle={{
                                    backgroundColor: 'transparent',
                                }}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }} />


                            <TextInput onChangeText={
                                (title) => { this.setState({ title }) }
                            } placeholder={'Title'} placeholderTextColor='white' style={styles.input} />
                            <TextInput onChangeText={
                                (desc) => { this.setState({ desc }) }
                            } placeholder={'Description'} placeholderTextColor='white' style={styles.input} multiline={true} numberOfLines={4} />
                            <TextInput onChangeText={
                                (story) => { this.setState({ story }) }
                            } placeholder={'Story'} placeholderTextColor='white' style={styles.input} multiline={true} numberOfLines={20} />
                            <TextInput onChangeText={
                                (moral) => { this.setState({ moral }) }
                            } placeholder={'Moral of story'} placeholderTextColor='white' style={styles.input} multiline={true} numberOfLines={4} />
                            <TouchableOpacity style={styles.button}>
                                <Text style={{ fontFamily: 'BubbleGumSans', alignSelf: 'center', color: 'white', fontSize: RFValue(15) }}>Submit</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={styles.a}></View>


                </View>)
        }
        else {

            return (<AppLoading />)
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
    inputcontainer: {
        flex: 0.85,
    },
    image: {
        width: '90%',
        height: RFValue(250),
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    input: {
        borderColor: 'white',
        fontFamily: 'BubbleGumSans',
        borderWidth: RFValue(1),
        marginTop: RFValue(10),
        borderRadius: RFValue(3),
        color: 'white',
        paddingLeft: RFValue(10)

    },
    button: {
        alignSelf: 'center',
        backgroundColor: 'orange',
        borderRadius: RFValue(10),
        marginTop: RFValue(20),
        width: '30%',
        height: RFValue(40),
        justifyContent: 'center',




    },
    a: {
        flex: 0.07
    }



})