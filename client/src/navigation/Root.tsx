import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, RegisterScreen } from '../screens';
import { AuthStack, DrawerStack } from './index';
import { useSelector } from 'react-redux';

const RootStackScreen = () => {
  const userState = useSelector((state: any) => state.userState);
  const RootStack = createNativeStackNavigator();
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {userState.id ? (
        <RootStack.Screen name='DrawerStack' component={DrawerStack} />
      ) : (
        <RootStack.Screen name='AuthStack' component={AuthStack} />
      )}
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
