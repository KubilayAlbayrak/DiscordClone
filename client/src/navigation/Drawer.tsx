import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, RegisterScreen } from '../screens';
import { DrawerStackParamList } from '../../types';
import { ChannelScreen } from '../screens';
import { TabStack } from '.';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SideBar } from '../components';

const DrawerStackScreen = () => {
  const DrawerStack = createDrawerNavigator<DrawerStackParamList>();
  return (
    <DrawerStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // screenOptions={{
      //   headerStyle: {
      //     backgroundColor: '#23272A',
      //   },
      //   headerTintColor: '#fff',
      //   headerTitleStyle: {
      //     fontWeight: 'bold',
      //     color: '#23272A',
      //   },
      // }}
      drawerContent={(props) => <SideBar {...props} />}
    >
      <DrawerStack.Screen name='TabStack' component={TabStack} />
      {/* <DrawerStack.Screen
        name='ChannelScreen'
        component={ChannelScreen}
        options={{
          headerStyle: {
            backgroundColor: '#23272A',
          },
          headerTintColor: '#fff',
        }}
      /> */}
    </DrawerStack.Navigator>
  );
};

export default DrawerStackScreen;
