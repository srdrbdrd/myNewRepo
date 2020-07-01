import React, {useEffect} from 'react'
import {SafeAreaView , Text, View} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
const SplashScreen = (props) => {

    useEffect(() =>{
         
        AsyncStorage.getItem('@USER_ID')
        .then(res =>{
            if(res == null)
                props.navigation.navigate("Login") // Giriş durumunda login sayfasına yönlendir.
            else
            setTimeout(() => {props.navigation.navigate("Main")
            }, 2000); // 2 saniye delay ile açılmasını sağlıyor.
                
        })
    },[])


    return (
        <SafeAreaView style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style = {{fontSize:50}}>Buyurun Efenim </Text>
        </SafeAreaView>
    )
}


export {SplashScreen}