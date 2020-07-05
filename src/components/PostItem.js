import React from 'react'
import {View,Text} from 'react-native'

import styles from '../styles'

const PostItem=props=>{
    return(
        <View style={styles.post.container}>
        <Text style={{alignSelf:'center'}}>{props.data}</Text>
        </View>
    )
}
export {PostItem}