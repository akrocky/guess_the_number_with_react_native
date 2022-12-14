import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import NumberContainer from '../components/Game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
function generateRandomBetween(min,max,exclude) {
 const rnNum=Math.floor(Math.random()* (max-min))+min ;
 if (rnNum===exclude) {
  return generateRandomBetween(min,max,exclude);
 } else {
  return rnNum;
 }
}
let minBoundary=1;
let maxBoundary=100;

const GameScreen = ({userNumber}) => {
  const initialGuess=generateRandomBetween(minBoundary,maxBoundary,userNumber)
  const  [currentGuess,setCurrentGuess]=useState(initialGuess)
  function nextGuessHandler(direction) {
    if (
      (direction==='lower' && currentGuess<userNumber)
      ||
      (direction==="greater" 
    && currentGuess >userNumber)) {
      Alert.alert("Don't lie",[{text:'Sorry',style:'cancel'},])
      return;
    }
    if (direction==='lower') {
      maxBoundary=currentGuess;
 
    }else{
      minBoundary=currentGuess+1;
     

    }
    const newRndNumber=  generateRandomBetween(minBoundary,maxBoundary,currentGuess)  ;
    setCurrentGuess(newRndNumber);
  }
  return (
    <View style={styles.screen}>
      <Title >Opponent's Guess</Title>
<NumberContainer>
{currentGuess}
</NumberContainer>


     
      <Text>Higher or lower?</Text>
      <View>
<PrimaryButton onPress={nextGuessHandler.bind(this,'lower')} >-</PrimaryButton >
<PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>+</PrimaryButton>
</View>
      {/* <View>
        LOG Round
      </View> */}
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen:{
    flex:1,
    padding:24,
    paddingTop:40
  },
  
})