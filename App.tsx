import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  const mockNavigation: any = {};
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <LoginScreen navigation={mockNavigation} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;