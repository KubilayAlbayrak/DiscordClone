import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

type Callback = () => any;

export interface ToggleHeaderProps {
  isToggle: boolean;
  onPressToggle?: Callback;
  onPressBack?: Callback;
}

const ToggleHeader: React.FC<ToggleHeaderProps> = ({
  isToggle,
  onPressBack,
  onPressToggle,
}) => {
  return (
    <View style={styles.toggleHeaderContainer}>
      {isToggle ? (
        <Pressable onPress={onPressToggle}>
          <Ionicons name='md-reorder-three-sharp' size={24} color='white' />
        </Pressable>
      ) : (
        <Pressable onPress={onPressBack}>
          <Entypo name='chevron-left' size={30} color='white' />
        </Pressable>
      )}
    </View>
  );
};

export default ToggleHeader;

const styles = StyleSheet.create({
  toggleHeaderContainer: {
    justifyContent: 'space-between',
    marginLeft: wp(6),
    marginRight: wp(6),
    marginTop: hp(2),
  },
});
