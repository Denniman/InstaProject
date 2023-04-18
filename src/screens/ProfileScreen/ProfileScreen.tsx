import React from 'react';
import {View} from 'react-native';

import {ProfileHeader} from './ProfileHeader';
import {styles} from './styles';

import {userBio} from '../../config/userBio';

import {FeedsGridView} from '../../components/FeedsGridView';

export const ProfileScreen = () => {
  return (
    <View style={styles.gridContainer}>
      <FeedsGridView data={userBio} ListHeaderComponent={<ProfileHeader />} />
    </View>
  );
};
