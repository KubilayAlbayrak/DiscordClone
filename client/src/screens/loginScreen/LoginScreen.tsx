import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ToggleHeader, TextInput } from '../../components';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SafeAreaView style={styles.loginScreenContainer}>
      <View
        style={{
          flex: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Text style={styles.excitedText}>
          We're so excited to see you again!
        </Text>
      </View>
      <View style={{ flex: 70 }}>
        <TextInput
          label='username'
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          label='password'
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.forgotPassText}>Forgot your password?</Text>
        <TouchableOpacity
          onPress={() => {}}
          style={{ backgroundColor: 'blue' }}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: wp(80),
            marginTop: hp(5),
          }}
        >
          <Text style={styles.excitedText}>Need an account?</Text>
          <Text
            style={styles.registerText}
            onPress={() => navigation.navigate('RegisterScreen')}
          >
            Register
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
