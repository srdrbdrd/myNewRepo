import React, {useState} from 'react'
import {SafeAreaView,View,Text,TextInput,TouchableOpacity} from 'react-native'

import styles from '../styles'


const Login=props=>{
   
   
   
   
   
   
   
    return(
        <SafeAreaView style = {{flex:1}}>
            <View style = {{flex:1,justifyContent:'center'}}>
                <TextInput
                    style = {styles.login.input}
                    placeholder = "E-posta "
                    keyboardType = "email-address"
                    autoCapitalize = "none"
                    
                />

                <TextInput
                    placeholder = "Şifre"
                    secureTextEntry
                    

                />

                <View style = {{marginTop: 20}}>
                    <TouchableOpacity style = {[styles.login.buttonContainer,{backgroundColor:'#bbdefb'}]}>
                        <Text>Giriş</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style = {styles.login.buttonContainer} onPress={() => props.navigation.navigate("SignUp")}>
                        <Text>Kayıt</Text>
                    </TouchableOpacity> 

                    

                </View>
             
           
           
           
           
            </View>
        </SafeAreaView>
    )
}
export {Login}