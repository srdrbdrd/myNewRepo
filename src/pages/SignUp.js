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
        if (usermail  && password) {
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
            }}
            else{
                Alert.alert("Lütfen gerekli alanları doldurunuz")
            }
    }
   
    return(
        <SafeAreaView style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
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
                    <TouchableOpacity style = {styles.login.buttonContainer} onPress={signUser}>
                        <Text style = {{color:'white'}}>Kayıt Ol</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style = {styles.login.buttonContainer} onPress ={() => props.navigation.goBack()}>
                        <Text style = {{color:'white'}}>Vazgeç</Text>
                    </TouchableOpacity> 

                    

                </View>
             
           
           
           
           
            </View>
        </SafeAreaView>
    )
}
export {SignUp}