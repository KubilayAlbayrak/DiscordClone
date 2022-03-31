import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, RegisterScreen } from '../screens';
import { AuthStackParamList } from '../../types';

const AuthStackScreen = () => {
  const AuthStack = createNativeStackNavigator<AuthStackParamList>();
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name='LoginScreen' component={LoginScreen} />
      <AuthStack.Screen name='RegisterScreen' component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;

const styles = StyleSheet.create({});
