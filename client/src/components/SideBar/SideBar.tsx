import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  ChannelList,
  Chat,
  OverlayProvider,
  useChatContext,
} from 'stream-chat-expo';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { FontAwesome5 } from '@expo/vector-icons';
import { StreamColors } from '../../constants/Colors';

const SideBar = (props: any) => {
  const userState = useSelector((state: any) => state.userState);
  const [selectedTab, setSelectedTab] = useState<string>();
  const [selectedChannel, setSelectedChannel] = useState(null);
  const { client } = useChatContext();
  const navigation = useNavigation();

  const onChannelSelect = (channel: any) => {
    // setSelectedChannel(channel);
    navigation.navigate('ChannelScreen', { channel });
  };

  const filters = { members: { $in: [userState.id] } };
  const publicFilters = { type: 'livestream' };

  return (
    <SafeAreaView {...props} style={styles.sidebarContainer}>
      <TouchableOpacity
        style={{ justifyContent: 'center', alignItems: 'center' }}
        onPress={() => {
          navigation.navigate('ChannelScreen');
        }}
      >
        <FontAwesome5
          name='discord'
          size={50}
          color={StreamColors.discord_purple}
        />
      </TouchableOpacity>
      <View style={styles.tabs}>
        <View
          style={selectedTab === 'Public' ? styles.groupTitleBottomBorder : {}}
        >
          <Text
            style={styles.groupTitle}
            onPress={() => setSelectedTab('Public')}
          >
            Public
          </Text>
        </View>
        <View
          style={selectedTab === 'Private' ? styles.groupTitleBottomBorder : {}}
        >
          <Text
            style={styles.groupTitle}
            onPress={() => setSelectedTab('Private')}
          >
            Private
          </Text>
        </View>
      </View>
      {selectedTab === 'Public' ? (
        <ChannelList onSelect={onChannelSelect} filters={publicFilters} />
      ) : (
        <ChannelList onSelect={onChannelSelect} filters={filters} />
      )}
    </SafeAreaView>
  );
};

export default SideBar;

const styles = StyleSheet.create({
  sidebarContainer: {
    flex: 1,
    backgroundColor: '#23272A',
  },
  groupTitle: {
    color: 'white',
    margin: 10,
    fontSize: 16,
    fontWeight: 'bold',
    borderBottomColor: 'gray',
    borderBottomWidth: 4,
  },
  groupTitleBottomBorder: {
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    backgroundColor: '#23272A',
  },
});
