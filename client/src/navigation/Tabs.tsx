import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabsStackParamList } from '../../types';
import {
  ProfileScreen,
  MentionsScreen,
  SearchScreen,
  FriendsScreen,
  ChannelScreen,
} from '../screens';
import { TabBar } from '../components';

const TabStackScreen = () => {
  const TabStack = createBottomTabNavigator<TabsStackParamList>();
  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <TabStack.Screen name='ChannelScreen' component={ChannelScreen} />
      <TabStack.Screen name='FriendsScreen' component={FriendsScreen} />
      <TabStack.Screen name='SearchScreen' component={SearchScreen} />
      <TabStack.Screen name='MentionsScreen' component={MentionsScreen} />
      <TabStack.Screen name='ProfileScreen' component={ProfileScreen} />
    </TabStack.Navigator>
  );
};

export default TabStackScreen;

const styles = StyleSheet.create({});
