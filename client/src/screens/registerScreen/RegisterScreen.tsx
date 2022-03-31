import React, { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import styles from './styles';
import { useChatContext } from 'stream-chat-expo';
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/actions';
import { ToggleHeader } from '../../components';

export interface RegisterScreenProps {
  navigation: any;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('kubilayalbayrak');
  const [name, setName] = useState('KubilayAlbayrak');
  const [password, setPassword] = useState('');
  const [isReady, setIsReady] = useState<boolean>(false);
  const { client } = useChatContext();

  // const API_KEY = '3eeh8dj6hc3u';
  // üconst client = StreamChat.getInstance(API_KEY);

  const connectUser = async () => {
    await client.connectUser(
      {
        id: username,
        name: name,
        image: 'https://placebeard.it/640x360',
      },
      client.devToken(username)
    );
    setIsReady(true);

    const channel = client.channel('livestream', 'public', {
      name: 'Public',
    });
    await channel.watch();
  };

  const register = () => {
    dispatch(
      userActions.setInformation({
        id: username,
        name: name,
        password: password,
      })
    );
    connectUser();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ToggleHeader
        isToggle={false}
        onPressBack={() => navigation.navigate('LoginScreen')}
      />
      <ScrollView>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>We are so excited to see you again</Text>
        <Text style={styles.text}>ACCOUNT INFORMATION</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          placeholderTextColor='grey'
          placeholder='Username'
        />
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholderTextColor='grey'
          placeholder='Full name'
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholderTextColor='grey'
          placeholder='Password'
        />
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>

        <Pressable style={styles.button} onPress={() => register()}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
