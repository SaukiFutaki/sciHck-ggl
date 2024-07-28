import React from 'react'
import { Text, View,StyleSheet } from 'react-native'


export default function Dashboard() {
  return (
   <View style={style.container}>
    <Text>Welcome to dashboard</Text>
   </View>
  )
}


const style = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#f0f0f0",
        alignItems: "center",
        justifyContent: "center",
    }
})