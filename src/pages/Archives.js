import React from 'react'
import {SafeAreaView,View,Text, Button} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';

const Archives= (props) =>{
    //Logout kısmını test amaçlı yaptım.Gerektiğinde logine geri dönmek için.
    const user = auth().currentUser

    const signOut = () => {
        auth().signOut()
        AsyncStorage.removeItem('@USER_ID')
        props.navigation.navigate("Login")
    }



    return(
        <SafeAreaView>
        <View>
        <Text>Archives</Text>
        <Button title = "Logout" onPress={signOut}/>
        </View>
        </SafeAreaView>
    )
}
export {Archives}