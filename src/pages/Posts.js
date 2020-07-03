import React,{useState, useEffect} from 'react'
import {SafeAreaView,View,Text,FlatList,TextInput, Button} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Context, { initialState } from '../context/store'





const Posts=props=>{
     const user2 = initialState.user //storedan kullanıcı ismini alıp databasede başlık olarak kullanmaya çalışıyorum.
    const user = auth().currentUser


    const [list,setList] = useState([])
    const [data,setData] = useState("")

    useEffect(() => { //Veri görüntüleme
        database()
            .ref(`/Posts`) 
            .once('value')
            .then(response => {
                if (response.val() != null) {
                    let responseList = Object.values(response.val());
                    setList(responseList);
                }
            })
    }, [])


    const sendData = () => { //Veri kaydetme
        let newArray = [...list]
        newArray.push(data)
        setList(newArray)

        database().ref(`/${user2}/`).push(data) //ref değerini değiştirerek database kayıt yerinde oynama yapabiliyoruz.
    }


    const signOut = () => {
        AsyncStorage.removeItem('@USER_ID')
        
        auth().signOut()

        
        props.navigation.navigate("Login")
    }

    return(
        <SafeAreaView style = {{flex:1}}>
        <View style = {{flex:1}}>
        <FlatList 
            data = {list}
            renderItem = {({item}) => <Text>{item}</Text>}

        />
        <View>
            <TextInput 
            style = {{ borderRadius:5,padding:5,margin:5,backgroundColor:'grey'}}
            onChangeText = {(text) => setData(text)}
            />
            <Button 
            title = "Gönder"
            onPress={sendData}
            />
            <Button
                title="Çıkış Yap"
                onPress={signOut}
            />
        </View>

        </View>
        </SafeAreaView>
    )
}
export {Posts}