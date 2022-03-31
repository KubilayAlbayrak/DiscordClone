import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StreamColors } from '../../constants/Colors';

const FriendsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: StreamColors.discord_gray,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>FriendsScreen</Text>
    </View>
  );
};

export default FriendsScreen;

const styles = StyleSheet.create({});
