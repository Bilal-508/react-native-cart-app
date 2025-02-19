import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import TextField from '../components/TextField';

const Login = ({navigation, route}) => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const loginUser = () => {
    navigation.navigate('Products', {
      name: name,
      email: email,
    });
  };

  const isValid = () => {
    const regex = /^[a-z ,.'-]+$/i;
    return regex.test(name);
  };

  useEffect(() => {
    setErrorMessage(isValid() ? '' : 'Invalid name');
  }, [name]);

  return (
    <View style={styles.container}>
      <View style={{display: 'flex', flex: 1, justifyContent: 'space-between'}}>
        <View style={{alignSelf: 'center'}}>
          <Image
            source={require('../assets/logo-red.png')}
            style={styles.logo}
          />
          <Text>Sell What you don't need</Text>
        </View>

        <View>
          <TextField
            label="Enter Name"
            value={name}
            onChangeText={setName}
            style={errorMessage ? styles.errorInput : styles.input}
            errorMsg={errorMessage}
          />
          <TextField
            value={username}
            onChangeText={setUsername}
            style={styles.input}
            label="Enter Username"
          />
          <TextField
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            label="Enter Email"
          />
          <TextField
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            label="Enter Password"
          />

          <TouchableNativeFeedback onPress={() => loginUser()}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logoContainer: {
    display: 'flex',
  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  errorInput: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
  },
  buttonText: {
    color: 'white',
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {},
});
