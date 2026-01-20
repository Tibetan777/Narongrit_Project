import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../AuthStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../context';
const Profile = () => {
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
      <Text style={styles.title}>Edit Profile</Text>
      <TouchableOpacity style={styles.button} onPress={userlogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Profile;
