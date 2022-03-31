import {
  StyleSheet,
  Text,
  View,
  TextInput as ReactTextInput,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { StreamColors } from '../../constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export interface TextInputProps {
  label: string;
  value: string;
  onChangeText: any;
  textInputStyle?: any;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChangeText,
  textInputStyle,
}) => {
  const [textInputFocused, setTextInputFocused] = useState<boolean>(false);
  const onPressTextInput = () => {
    setTextInputFocused(true);
  };

  const onPressOutTextInput = () => {
    setTextInputFocused(false);
  };

  return (
    <View style={[textInputStyle]}>
      <Text style={styles.labelText}>{label}</Text>
      <View
        style={
          textInputFocused
            ? styles.textInputViewFocus
            : styles.textInputViewBlur
        }
      >
        <ReactTextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.textInput}
          onFocus={onPressTextInput}
          onBlur={onPressOutTextInput}
        />
      </View>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  textInputViewBlur: {
    justifyContent: 'center',
    height: hp(5),
    width: wp(80),
    backgroundColor: StreamColors.discord_darkgray,
    borderColor: '#040405',
    borderWidth: 0.8,
  },
  textInputViewFocus: {
    justifyContent: 'center',
    height: hp(5),
    width: wp(80),
    backgroundColor: StreamColors.discord_darkgray,
    borderColor: StreamColors.discord_textinput_focus_border,
    borderWidth: 1,
  },

  labelText: {
    color: '#939699',
    fontWeight: 'bold',
    fontSize: wp(4.5),
    marginBottom: hp(1),
    alignSelf: 'flex-start',
  },
  textInput: {
    color: '#A3A6A8',
    fontSize: wp(5),
    fontWeight: '600',
  },
});
