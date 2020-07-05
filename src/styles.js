import { StyleSheet } from 'react-native'
import React from 'react'
import {Dimensions} from 'react-native'
const styles = {
    login: StyleSheet.create({
        input: {
            color: "#004a00",
            margin: 5,
            marginVertical: 10,
            borderRadius: 5,
            padding: 12,
            borderColor:'#55a752',
            borderWidth:2,
            width:Dimensions.get('window').width * 0.9
            
         },
         
         
         
         buttonContainer: {
            padding: 15,
            margin: 5,
            borderRadius: 5,
            alignItems: 'center',
            width:Dimensions.get('window').width * 0.9,
            backgroundColor:"#004a00"
            
        }
    })
}

export default styles