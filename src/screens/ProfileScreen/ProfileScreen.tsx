import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {ProfileHeader} from './ProfileHeader';
import {styles} from './styles';

import {userBio} from '../../config/userBio';

import {FeedsGridView} from '../../components/FeedsGridView';

export const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const id = route.params?.userId;

  useEffect(() => {
    navigation.setOptions({title: id});
  }, [navigation, id]);

  return (
    <View style={styles.gridContainer}>
      <FeedsGridView data={userBio} ListHeaderComponent={<ProfileHeader />} />
    </View>
  );
};
