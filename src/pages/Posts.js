import React from 'react'
import {SafeAreaView,View,Text,FlatList} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const Posts=props=>{
    return(
        <SafeAreaView>
        <View>
        <Text>Posts</Text>
        </View>
        </SafeAreaView>
    )
}
export {Posts}