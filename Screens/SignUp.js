import React, {useState} from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput, Dimensions, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { Ionicons, AntDesign } from '@expo/vector-icons';
export default function SignUp({navigation}) {
  const [showPassword, setShowPassword] = useState(true);
    return (
        <SafeAreaView style = {style.container}>
            <View style = {style.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}><AntDesign name="arrowleft" size={24} color="black" style={style.backImg}/></TouchableOpacity>
                <View style = {style.headerImg}>
                    <Image source = {require('../images/tt.png')} style={style.background}></Image>
                </View>
            </View>
            <View style = {style.body}>
              <View>
                <Text style = {style.title}>Create Account</Text>
              </View>
              
              <View>
              <View>
              <View style = {style.inputText}>
                    <Text>Full Name</Text>
              </View>

              <View style={style.sectionStyleOne}>   
                <TextInput style={{flex: 1}} />
              </View>
              </View>

              <View>
                <View style = {style.inputText}>
                    <Text>Phone Number</Text>
                </View>

                <View style={style.sectionStyleOne}>   
                  <TextInput style={{flex: 1}} 
                  keyboardType='numeric'/>
                </View>
              </View>

              <View>
                <View style = {style.inputText}>
                    <Text>Email Address</Text>
                </View>

                <View style={style.sectionStyleOne}>   
                  <TextInput style={{flex: 1}} 
                  keyboardType='email-address' />
                </View>
              </View>

              <View>
                <View style = {style.inputText}>
                    <Text>Password</Text>
                </View>

                <View style={style.sectionStyleOne}>   
                  <TextInput style={{flex: 1}} 
                  secureTextEntry={showPassword ? true : false}/>
                  <Ionicons name="eye" size={24} color={'black'} style = {[showPassword && style.icon ]} 
                  onPress={() => setShowPassword(!showPassword)}/>
                </View>
              </View>
              </View>

              <View style = {style.footer}>
              <View style = {style.btn}>
                    <TouchableOpacity style = {style.btnStyle}>
                        <Text style = {style.btnText}>Sign Up</Text>
                    </TouchableOpacity>
              </View>

              <View style = {style.footerText}>
                    <Text style = {{fontWeight : 'bold'}}>I'm already a member.</Text>
                    <Text style = {style.signLink} onPress={() => navigation.navigate('SignIn')}>Sign In</Text>
              </View>
              </View>
            </View>
        </SafeAreaView>
    );
  };
  
  const style = StyleSheet.create({
    
    
    container : {
      flex : 1,
      backgroundColor : '#fff',
      paddingTop : 50,
    },
    header : {
      flex : 1,
      flexDirection : 'row',
      
    },
    body : {
      flex : 4,
      backgroundColor : '#f2f2f2',
      borderTopRightRadius : 35,
      borderTopLeftRadius : 35,
      alignItems : 'center',
    },
    headerImg : {
      width : Dimensions.get('screen').width / 1,
      height : Dimensions.get('screen').height / 2,
      alignItems : 'center',
      justifyContent : 'center',
  },

  backImg : {
      marginLeft : 20,
  },

  background : {
    width : Dimensions.get('screen').width / 1.3,
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
    margin : 5,
    marginBottom : 10,
    height : Dimensions.get('window').height / 15,
    width : Dimensions.get('window').width / 1.2,
  },

  icon : {
    color : '#9b4afe',
  },

  footer : {
    marginTop : 10,
    justifyContent: 'space-around',
    height : Dimensions.get('window').height / 6,
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
},

signLink : {
  fontWeight : 'bold',
  color : '#9b4afe',
  paddingLeft : 3,
},
});