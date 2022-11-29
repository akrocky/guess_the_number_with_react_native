import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import Colors from './constains/colors';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [userNumber,setUserNumber]=useState();
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  let screen=<StartGameScreen onPickNumber={pickedNumberHandler}/>
  if (userNumber) {
    screen=<GameScreen userNumber={userNumber}/>
  }
  return (
    <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.rootScreen}>
     <ImageBackground source={require('./assets/riho-kroll-m4sGYaHYN5o-unsplash.jpg')} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroungImage}>
      <SafeAreaView style={styles.rootScreen}>
      {screen}
      </SafeAreaView>
    
     </ImageBackground>
      
    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex:1
  },
  backgroungImage:{
    opacity:0.15
  }
});
