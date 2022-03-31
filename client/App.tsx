import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { RootStack } from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import configureStore from './src/redux/store';
import { OverlayProvider, Chat, Theme, DeepPartial } from 'stream-chat-expo';
import { StreamChat } from 'stream-chat';
import { LogBox } from 'react-native';
import { StreamColors } from './src/constants/Colors';
import { StatusBar } from 'expo-status-bar';

const store = configureStore();

export default function App() {
  LogBox.ignoreAllLogs();

  const API_KEY = '3eeh8dj6hc3u';
  const client = StreamChat.getInstance(API_KEY);

  const theme: DeepPartial<Theme> = {
    colors: StreamColors,
  };

  useEffect(() => {
    return () => {
      client.disconnectUser();
    };
  }, []);

  return (
    <Provider store={store}>
      <OverlayProvider value={{ style: theme }}>
        <Chat client={client}>
          <NavigationContainer>
            <StatusBar style='light' />
            <RootStack />
          </NavigationContainer>
        </Chat>
      </OverlayProvider>
    </Provider>
  );
}
