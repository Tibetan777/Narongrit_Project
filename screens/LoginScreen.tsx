import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../AuthStyles';
import {AuthContext} from '../context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [, setAuthState] = useContext(AuthContext);
  const [email_mem, setemail_mem] = useState('');
  const [password_mem, setpassword_mem] = useState('');
  const userlogin = async () => {
    let isinvails = false;
    if (email_mem === '' || password_mem === '') {
      isinvails = true;
      Alert.alert('Login', 'Please enter your correct E-mail and Password.');
    } else {
      isinvails = false;
    }
    if (isinvails) {
      return;
    }
    if (email_mem === 'admin' && password_mem === '1234') {
      Alert.alert('Login Successful', 'admin');
      setAuthState({
        user: email_mem,
        signedIn: true,
      });
      await AsyncStorage.setItem('Logined', email_mem);
    } else {
      Alert.alert('Login Failed', 'Server Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email_mem}
        onChangeText={setemail_mem}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password_mem}
        onChangeText={setpassword_mem}
      />
      <TouchableOpacity style={styles.button} onPress={userlogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ForgotPasswordScreen')}
      >
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.link}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;