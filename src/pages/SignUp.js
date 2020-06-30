import React, {useState} from 'react'
import {SafeAreaView,View,Text,TextInput,TouchableOpacity,Alert} from 'react-native'
import auth from '@react-native-firebase/auth';
import styles from '../styles'


const SignUp=props=>{
   
    const [usermail,setUsermail]=useState("")
    const [password,setPassword]=useState("")
    const [userpassRep,setUserpassrep]=useState("")

    const setMail=text=>setUsermail(text)
    const setPass=text=>setPassword(text)
    const setPassRep=text=>setUserpassrep(text)

    const signUser=async()=>{
        if(password===userpassRep){
            try {
                await auth().createUserWithEmailAndPassword(usermail,password)
                props.navigation.goBack()
            } catch (error) {
                Alert.alert("App","Bir hata oluştu, lütfen bilgileri kontrol edin.")
            }
        }
        else{
            Alert.alert("App","Şifreler uyuşmuyor!")
        }
    }
   
    return(
        <SafeAreaView style = {{flex:1}}>
            <View style = {{flex:1,justifyContent:'center'}}>
                <TextInput
                    style = {styles.login.input}
                    placeholder = "E-posta adresini giriniz"
                    keyboardType = "email-address"
                    autoCapitalize = "none"
                    onChangeText={setMail}
                />

                <TextInput
                    style = {styles.login.input}
                    placeholder = "Şifrenizi giriniz"
                    secureTextEntry
                    onChangeText={setPass}
                />


                <TextInput
                    style = {styles.login.input}
                    placeholder = "Şifrenizi tekrar giriniz"
                    secureTextEntry
                    onChangeText={setPassRep}
                />
                    


                <View style = {{marginTop: 20}}>
                    <TouchableOpacity style = {[styles.login.buttonContainer,{backgroundColor:'#bbdefb'}]} onPress={signUser}>
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