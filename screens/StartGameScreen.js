import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constains/colors';

const StartGameScreen = ({onPickNumber}) => {
  const [enteredNumber,setEnteredNumber]=useState("");
  function numberInputHandler({ nativeEvent: { eventCount, target, text} }) {

 
    setEnteredNumber(text);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }
  function confirmInputHanler() {
    console.log(enteredNumber);
    const chosenNumber=parseInt(enteredNumber);
    console.log(chosenNumber)
    if (isNaN(chosenNumber)||chosenNumber <= 0 ||chosenNumber > 99) {
      //show alert
      Alert.alert('Invalid number!','Number has to be a number between 1 and 99',[{text:'ok',style:'destructive'}]);
      return;
    }
    onPickNumber(chosenNumber);
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} maxLength={2} keyboardType="number-pad"
      onChange={numberInputHandler}
      value={enteredNumber}
      />
    <View style={styles.buttonsContainer}>
      
      <View style={styles.buttonContainer}>
      <PrimaryButton onPress={resetInputHandler}>reset</PrimaryButton>
      </View>
      <View style={styles.buttonContainer}>
      <PrimaryButton onPress={confirmInputHanler}>confirm</PrimaryButton>
      </View>
      </View>
     
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  inputContainer:{
    alignItems:'center',
    marginHorizontal:24,
    borderRadius:8,
    padding:16,
    marginTop:100,
    backgroundColor:Colors.primary800,
    elevation:4,
    shadowColor:'black',
    textShadowOffset:{width:0,height:2},
    shadowRadius:6,
    shadowOpacity:0.25,
  },
  textInput:{
height:50,
width:50,
fontSize:30,
borderBottomColor:Colors.accent500,
borderBottomWidth:2,
color:Colors.accent500,
marginVertical:8,
fontWeight:'bold',
textAlign:'center'
  },
  buttonsContainer:{
    flexDirection:'row'
  },
  buttonContainer:{
    flex:1
  }
})