import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constains/colors';

const PrimaryButton = ({children,onPress}) => {
  return (
    <View style={styles.btnOuterContainer}>
    <Pressable style={({pressed})=>pressed?[styles.buttomInnercontainer,styles.pressed]:styles.buttomInnercontainer} onPress={onPress} android_ripple={{color:Colors.primary600}}>
    
      <Text style={styles.buttonText}>{children}</Text>
  
    </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  btnOuterContainer:{
    borderRadius:28,
      margin:4,
      overflow:'hidden'
  },
  buttomInnercontainer:{
    backgroundColor:Colors.primary500,
    borderRadius:28,
    paddingVertical:8,
    paddingHorizontal:16,
    elevation:2,
    margin:4,
  },
  buttonText:{
    color:'white',
    textAlign:'center'
  },
  pressed:{
    opacity:0.75
  }
})