import { Modal, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ToggleHeader } from '../../components';
import styles from './styles';

export type Callback = (el: boolean) => any;

export interface SearchScreenProps {
  setModalVisible: Callback;
}

const SearchScreen: React.FC<SearchScreenProps> = ({ setModalVisible }) => {
  return (
    <Modal presentationStyle='fullScreen' animationType='slide'>
      <View style={styles.screenView}>
        <View style={{ marginTop: 50 }}>
          <ToggleHeader
            isToggle={false}
            onPressBack={() => setModalVisible(false)}
          />
        </View>
        <Text>Search Modal</Text>
      </View>
    </Modal>
  );
};

export default SearchScreen;
