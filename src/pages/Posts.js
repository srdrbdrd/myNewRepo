import React,{useState, useEffect, useContext} from 'react'
import {SafeAreaView,View,Text,FlatList,TextInput, Button} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Context, { initialState } from '../context/store'






const Posts=props=>{
    //const user2 = initialState.user //storedan kullanıcı ismini alıp databasede başlık olarak kullanmaya çalışıyorum.
    //const user = auth().currentUser

    //const {state,dispatch} = useContext(Context) //Storedan user verisini alamadım sanarım hata yapıyorum.
    const [list,setList] = useState([])
    const [data,setData] = useState("")
    
    useEffect(() => { //Veri görüntüleme
        database()
            .ref(`/Posts/`) 
            .on('value', snapshot => {
                 let responseList = Object.values(snapshot.val())   
                 setList(responseList)   
            })
        
    }, [])


    const sendData = () => { //Veri kaydetme
        

            database().ref('/Posts').push(data) //Girilen psotu atıyor.Fakat hala kullanıcı ile atmayı çözemedim
            

    }

    async function retrieveItem(key) { //Async storage daki kulllanıcı ismini çekmeyi denedim.
        try {
          const retrievedItem =  await AsyncStorage.getItem(key);
          const item = JSON.parse(retrievedItem);
          return item;
        } catch (error) {
          console.log(error.message);
        }
        return
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