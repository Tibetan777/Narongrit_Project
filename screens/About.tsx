import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../AuthStyles';
import {AuthContext} from '../context';
import AsyncStorage from '@react-native-async-storage/async-storage';
const About = () => {
  const [, setAuthState] = useContext(AuthContext);
  const userlogout = async () => {
    setAuthState({
      user: '',
      signedIn: false,
    });
    AsyncStorage.removeItem('Logined');
  };
    return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={userlogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
export default About;
