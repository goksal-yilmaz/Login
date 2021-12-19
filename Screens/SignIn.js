import React, {useState} from 'react'
import { View, Text, ScrollView, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import SignUp from './SignUp';

export default function SignIn({navigation}) {
    const [focus, setFocus] = useState(false);
    const [focused, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    return (
    
        <SafeAreaView style = {style.container}>
            
            <View style = {style.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}><AntDesign name="arrowleft" size={24} color="black" style={style.backImg}/></TouchableOpacity>
                
                <View style = {style.headerImg}>
                    <Image source = {require('../images/ss.png')} style={style.background}></Image>
                </View>
            </View>
            
            <View style = {style.body}>
                <View>
                    <Text style = {style.title}>Sign In</Text>
                </View>
                
                
                <View>
                       
                        <View style = {style.inputText}>
                            <Text>Email Address</Text>
                        </View>

                        <View style={[style.sectionStyleOne, focus && style.inputFocus]} 
                        onFocus = {() => setFocus(true)}
                        onBlur={() => setFocus(false)}>   
                        <TextInput style={{flex: 1}} 
                        keyboardType='email-address'/>
                        </View>

               </View>
                
                <View>
                    <View style = {style.inputText}>
                        <Text>Password</Text>
                    </View> 
                
                    <View style={[style.sectionStyleTwo, focused && style.inputFocus]} 
                    onFocus={() => setFocused(true)} 
                    onBlur={() => setFocused(false)}> 
                    <TextInput
                    style={{flex: 1}}
                    secureTextEntry={showPassword ? true : false}/>
                    <Ionicons name="eye" size={24} color={'black'} style = {[showPassword && style.icon ]} 
                    onPress={() => setShowPassword(!showPassword)}/>
                    </View>
                </View>
                
                <View style = {style.forgotPass}>
                    <Text>Forgot Password?</Text>
                </View>
                
                <View style = {style.btn}>
                    <TouchableOpacity style = {style.btnStyle}>
                        <Text style = {style.btnText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                
                <View style = {style.footerText}>
                    <Text style = {{fontWeight : 'bold'}}>I'm a new user.</Text>
                    <Text style = {style.signLink} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}


const style = StyleSheet.create({  
    container : {
        flex : 1,
        backgroundColor : '#fff',
        paddingTop : 50,
    },

    header : {
        flex : 2,
        flexDirection : 'row',
    },

    body : {
        flex : 3,
        backgroundColor : '#f2f2f2',
        borderTopRightRadius : 25,
        borderTopLeftRadius : 25,
        alignItems : "center",
    },
    
    headerImg : {
        width : Dimensions.get('screen').width / 1.2,
        alignItems : 'center',
        justifyContent : 'center',
    },

    backImg : {
        marginLeft : 20,
    },

    title : {
        paddingTop : 30,
        fontSize : 30,
        fontWeight : 'bold',
        marginBottom : 30,
    },

     inputText : {
         paddingLeft : 15,  
     },

     sectionStyleOne: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#fff',
        padding : 10,
        paddingRight : 20,
        borderRadius: 5,
        margin: 5,
        marginBottom : 15,
        height : Dimensions.get('window').height / 15,
        width : Dimensions.get('window').width / 1.2,
      },

      sectionStyleTwo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#fff',
        padding : 10,
        paddingRight : 20,
        borderRadius: 5,
        margin: 5,
        height : Dimensions.get('window').height / 15,
        width : Dimensions.get('window').width / 1.2,
      },
     
      inputFocus : {
        borderWidth : 1,
        borderColor : "#9b4afe",
      },

      forgotPass : {
        alignItems : 'flex-end',
        width : Dimensions.get('window').width / 1.2,
        marginBottom : 20,
      },

      btn : {
        justifyContent : 'center',
        alignItems : 'center',
      },

      btnStyle : {
       backgroundColor : '#9b4afe',
       justifyContent : 'center',
       alignItems : 'center',
       borderRadius : 10,
       height : Dimensions.get('window').height / 15,
       width : Dimensions.get('window').width / 1.2,   
     },

      btnText : {
       color : '#fff',
     },

     footerText : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems:  'center',
        height : Dimensions.get('window').height / 10,
    },

    signLink : {
        fontWeight : 'bold',
        color : '#9b4afe',
        paddingLeft : 3,
    },

    icon : {
        color : '#9b4afe',
    },
})