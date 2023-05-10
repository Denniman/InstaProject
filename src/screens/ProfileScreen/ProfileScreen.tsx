import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {ProfileHeader} from './ProfileHeader';
import {styles} from './styles';
import {
  UserProfileRouteProps,
  UserProfileNavigationProps,
  MyUserProfileNavigationProps,
  UserProfileNavigationRouteProps,
} from '../../navigation/interface';

import {userBio} from '../../config/userBio';

import {FeedsGridView} from '../../components/FeedsGridView';

export const ProfileScreen = () => {
  const route = useRoute<
    UserProfileRouteProps | UserProfileNavigationRouteProps
  >();
  const navigation = useNavigation<
    MyUserProfileNavigationProps | UserProfileNavigationProps
  >();
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
