import React, {useEffect,useContext} from 'react'
import {SafeAreaView , Text, View} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import Context  from '../context/store'
const SplashScreen = (props) => {
    
    
    
    useEffect(() =>{
         
        AsyncStorage.getItem('@USER_ID')
        .then(res =>{
            if(res == null)
                props.navigation.navigate("Login") // Giriş durumunda login sayfasına yönlendir.
            else
            
            setTimeout(() => {props.navigation.navigate("Main")
            }, 1200); // 2 saniye delay ile açılmasını sağlıyor.
                
        })
    },[])


    return (
        <SafeAreaView style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style = {{fontSize:50,color:'#004a00'}}>Hoşgeldiniz!</Text>
        </SafeAreaView>
    )
}


export {SplashScreen}