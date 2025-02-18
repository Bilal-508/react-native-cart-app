import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableNativeFeedback,
} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo-red.png')}
          style={styles.logo}></Image>
        <Text>Sell What you don't need</Text>
      </View>

      <TouchableNativeFeedback onPress={() => navigation.navigate('Login')}>
        <View style={styles.loginButton}>
          <Text style={styles.btnText}>Login</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={() => navigation.navigate('Register')}>
        <View style={styles.registerButton}>
          <Text style={styles.btnText}>Register</Text>
        </View>
      </TouchableNativeFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20',
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
  },
});
export default WelcomeScreen;
