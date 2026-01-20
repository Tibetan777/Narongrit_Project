/* eslint-disable react/no-unstable-nested-components */
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ListMember from './screens/ListMember';
import Profile from './screens/Profile';
import About from './screens/About';
import Log from './screens/Log';
import { AuthContext, AuthContextType } from './context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();

const App = () => {
  function HomeTabs() {
    return (
      <Tab.Navigator
        initialRouteName="ListMember"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = 'help';
            if (route.name === 'ListMember') {
              iconName = focused ? 'man' : 'man-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'aperture' : 'aperture-outline';
            } else if (route.name === 'Log') {
              iconName = focused ? 'document-text' : 'document-text-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name="ListMember"
          component={ListMember}
          options={{
            title: 'List Member',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile',
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            title: 'About',
          }}
        />
         <Tab.Screen
          name="Log"
          component={Log}
          options={{
            title: 'Log',
          }}
        />
      </Tab.Navigator>
    );
  }

  const AuthStackScreen = () => (
    <AuthStack.Navigator initialRouteName="LoginScreen">
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: 'Sign in',
        }}
      />
      <AuthStack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{
          title: 'Sign up',
        }}
      />
      <AuthStack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{
          title: 'Forgot password',
        }}
      />
    </AuthStack.Navigator>
  );
  const [authState, setAuthState] = useState({
    user: '',
    signedIn: false,
  });
  const getLogin = async () => {
    AsyncStorage.getItem('Logined').then(value => {
      if (value != null) {
        setAuthState({
          user: value,
          signedIn: true,
        });
      }
    });
  };
  useEffect(() => {
  getLogin();
  }, []);

  return (
    <AuthContext.Provider value={[authState, setAuthState] as AuthContextType}>
      <NavigationContainer>
        <Stack.Navigator>
          {authState.signedIn === false ? (
            <Stack.Screen
              name="AuthStackScreen"
              component={AuthStackScreen}
              options={{
                headerShown: false,
              }}
            />
          ) : (
            <Stack.Screen
              name="HomeTabs"
              component={HomeTabs}
              options={{
                headerShown: false,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
