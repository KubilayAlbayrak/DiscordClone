import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Channel, MessageList, MessageInput } from 'stream-chat-expo';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StreamColors } from '../../constants/Colors';

const ChannelScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const channel = route.params?.channel;

  navigation.setOptions({ title: channel?.data.name || channel });

  if (!channel) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: StreamColors.discord_gray,
        }}
      >
        <Text style={{ color: 'white' }}>Channel Not Found</Text>
      </View>
    );
  }

  return (
    <Channel
      channel={channel}
      key={channel.data.name}
      forceAlignMessages='left'
    >
      <MessageList />
      <MessageInput />
    </Channel>
  );
};

export default ChannelScreen;
