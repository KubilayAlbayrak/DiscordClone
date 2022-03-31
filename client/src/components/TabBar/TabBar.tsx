import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5, Octicons, Entypo } from '@expo/vector-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { DrawerActions } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import { SearchScreen } from '../../screens';
import { StreamColors } from '../../constants/Colors';

export interface TabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

const TabBar: React.FC<TabBarProps> = ({ state, descriptors, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (route.name === 'ChannelScreen') {
            navigation.navigate({ name: route.name, merge: true });
            navigation.dispatch(DrawerActions.toggleDrawer);
          } else if (route.name === 'SearchScreen') {
            setModalVisible(true);
          } else if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const generateTabBarIcons = () => {
          if (route.name === 'ChannelScreen') {
            if (isFocused) {
              return <FontAwesome5 name='discord' size={24} color='white' />;
            } else {
              return <FontAwesome5 name='discord' size={24} color='gray' />;
            }
          } else if (route.name === 'FriendsScreen') {
            if (isFocused) {
              return (
                <FontAwesome5 name='user-friends' size={24} color='white' />
              );
            } else {
              return (
                <FontAwesome5 name='user-friends' size={24} color='gray' />
              );
            }
          } else if (route.name === 'SearchScreen') {
            if (isFocused) {
              return <FontAwesome5 name='search' size={24} color='white' />;
            } else {
              return <FontAwesome5 name='search' size={24} color='gray' />;
            }
          } else if (route.name === 'MentionsScreen') {
            if (isFocused) {
              return <Octicons name='mention' size={24} color='white' />;
            } else {
              return <Octicons name='mention' size={24} color='gray' />;
            }
          } else if (route.name === 'ProfileScreen') {
            if (isFocused) {
              return <Entypo name='user' size={24} color='white' />;
            } else {
              return <Entypo name='user' size={24} color='gray' />;
            }
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarElement}
          >
            {generateTabBarIcons()}
            {modalVisible && <SearchScreen setModalVisible={setModalVisible} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: hp(7.5),
    backgroundColor: StreamColors.discord_bottomtab_darkgray,
    alignItems: 'center',
  },
  tabBarElement: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default TabBar;
