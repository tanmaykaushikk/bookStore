import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={{color:'white',fontSize:10}}>Copyright @ 2020, Bookstore Private Limited. All Rights Preserved</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    footer:{
        height:20,
        width:"100%",
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center',
    }

})