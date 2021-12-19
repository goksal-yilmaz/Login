import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native'

export default function Login({navigation}) {
    return (
        <SafeAreaView style = {style.container}>
            <View style = {style.header}>
                <Text style = {style.headerText}>My Contor</Text>
                <Image source = {require('../images/t.png')} style={style.headerImg}></Image>    
            </View>
            <View style = {style.body}>
            <Text style = {style.homeText}>Best way to invest Your Money!</Text>  
            
            <TouchableOpacity style = {style.FirstBtnStyle} onPress={() => navigation.navigate('SignUp')}>
                <Text style = {style.FirstBtnText}>Sign Up</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style = {style.SecondBtnStyle} onPress={() => navigation.navigate('SignIn')}>
                <Text style = {style.SecondBtnText}>Sign In</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff',
        paddingTop : 50,
        paddingHorizontal : 20,
    },

    header : {
        flex : 5,
        alignItems : 'center',
        justifyContent : 'space-evenly',
        backgroundColor : "#f2f2f2",
        borderRadius : 20,
        marginBottom : 30,
    },

    body : {
        flex : 2,
        alignItems : 'center',
    },

    headerText : {
        fontSize : 40,
        fontWeight : 'bold',
    },

    headerImg : {
        overflow: 'hidden',
    },

    homeText: {
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize : 15, 
        marginBottom : 30,
     },
     
     FirstBtnStyle : {
        backgroundColor : '#9b4afe',
        justifyContent : 'center',
        alignItems : 'center',
        height : Dimensions.get('window').height / 15,
        width : Dimensions.get('window').width / 1.6,
        borderRadius : 10,
        marginBottom : 15,
     },
    
     SecondBtnStyle : {
         borderStyle : 'solid',
         borderWidth : 1,
         borderColor : '#bcbcbc',
         backgroundColor : '#fff',
         justifyContent : 'center',
         alignItems : 'center',
         height : Dimensions.get('window').height / 15,
         width : Dimensions.get('window').width / 1.6,
         borderRadius : 10,
     },
    
     FirstBtnText : {
         color : '#fff',
     },
    
     SecondBtnText : {
       color : '#000000',
     },
})