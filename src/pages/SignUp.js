import React, {useState} from 'react'
import {SafeAreaView,View,Text,TextInput,TouchableOpacity} from 'react-native'

import styles from '../styles'


const SignUp=props=>{
   
   
   
   
   
   
   
    return(
        <SafeAreaView style = {{flex:1}}>
            <View style = {{flex:1,justifyContent:'center'}}>
                <TextInput
                    style = {styles.login.input}
                    placeholder = "E-posta adresini giriniz"
                    keyboardType = "email-address"
                    autoCapitalize = "none"
                    
                />

                <TextInput
                    style = {styles.login.input}
                    placeholder = "Şifrenizi giriniz"
                    secureTextEntry
                />


                <TextInput
                    style = {styles.login.input}
                    placeholder = "Şifrenizi tekrar giriniz"
                    secureTextEntry
                />
                    


                <View style = {{marginTop: 20}}>
                    <TouchableOpacity style = {[styles.login.buttonContainer,{backgroundColor:'#bbdefb'}]}>
                        <Text>Kayıt Ol</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style = {styles.login.buttonContainer} onPress ={() => props.navigation.goBack()}>
                        <Text>Vazgeç</Text>
                    </TouchableOpacity> 

                    

                </View>
             
           
           
           
           
            </View>
        </SafeAreaView>
    )
}
export {SignUp}