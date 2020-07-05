import React,{useState, useEffect, useContext} from 'react'
import {SafeAreaView,View,Text,FlatList,TextInput, Button,TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Context, { initialState } from '../context/store'
import styles from '../styles';
import {PostItem} from '../components'

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

    const renderPost=({item})=>{
        return(
            <PostItem
            data={item}
            />
        )
    }

    return(
        <SafeAreaView style = {{flex:1}}>
        <View style = {{flex:1,alignItems:'center'}}>
        <FlatList 
            keyExtractor={(_, index) => index.toString()}
            data = {list}
            renderItem = {renderPost}

        />
        <View style = {{alignItems:'center'}}>
            <TextInput style = {styles.login.input}
            
            onChangeText = {(text) => setData(text)}
            />
            <View >
                     <TouchableOpacity style = {styles.login.buttonContainer} onPress={sendData}>
                        <Text style = {{color:"white",fontSize:18}}>Post IT!</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style = {styles.login.buttonContainer} onPress={signOut}>
                        <Text style = {{color:"white",fontSize:12}}>Çıkış</Text>
                    </TouchableOpacity> 

                    

            </View>
            
        </View>

        </View>
        </SafeAreaView>
    )
}
export {Posts}