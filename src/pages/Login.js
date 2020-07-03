import React, {useState, useContext} from 'react'
import {SafeAreaView,View,Text,TextInput,TouchableOpacity,Alert} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import auth from '@react-native-firebase/auth';
import styles from '../styles'
import Context from '../context/store'

const Login=props=>{
    const [usermail,setUsermail]=useState("")
    const [password,setPassword]=useState("")
    const {state,dispatch} = useContext(Context) //store reducer bağlantısı
   
    const setMail=text=>setUsermail(text) //maili alabilmek için oluşturulan fonksiyon
    const setPass=text=>setPassword(text) //şifreyi alabilmek için oluşturulan fonksiyon


    //kullanıcı girişi için çalışacak fonksiyon
    const loginUser=async()=>{
        try {
            await auth().signInWithEmailAndPassword(usermail,password)
            const name   = usermail.substring(0, usermail.lastIndexOf("@")); //name adında bir değer atayıp mail öncesi değerini alarak store değerine kaydetmeyi denedim(Serdar)Oldu gibi inş
            dispatch({type:"SET_USER",userObj:name}) //üsttekinin devamı, eğer store değerine tanımlandıysa user verisini çekip kullanıcı ismini kullanabiliriz.
            //console.warn(state.user) 
            props.navigation.navigate("Main")
            AsyncStorage.setItem('@USER_ID', auth().currentUser.uid) //Async ile kullanıcı giriş id set etme.
            
            
            
        } catch (error) {
            Alert.alert("App","Bir hata oluştu.")
        }
    }
   
   
    return(
        <SafeAreaView style = {{flex:1}}>
            <View style = {{flex:1,justifyContent:'center'}}>
                <TextInput
                    style = {styles.login.input}
                    placeholder = "E-posta "
                    keyboardType = "email-address"
                    autoCapitalize = "none"
                    onChangeText={setMail} //yazıyı değişirse yazıyı al
                    
                />

                <TextInput
                    placeholder = "Şifre"
                    secureTextEntry
                    onChangeText={setPass} //yazıyı değişirse yazıyı al

                />

                <View style = {{marginTop: 20}}>
                    <TouchableOpacity style = {[styles.login.buttonContainer,{backgroundColor:'#bbdefb'}]} onPress={loginUser}>
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