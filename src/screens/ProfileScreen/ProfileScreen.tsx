import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  MyProfileRouteProps,
  UserProfileRouteProps,
  MyProfileNavigationProps,
  UserProfileNavigationProps,
} from '../../types';
import {userBio} from '../../config/userBio';
import {ProfileHeader} from './ProfileHeader';

import {FeedsGridView} from '../../components/FeedsGridView';
import {makeUseStyles} from '../../helpers/makeUserStyles';

export const ProfileScreen = () => {
  const route = useRoute<UserProfileRouteProps | MyProfileRouteProps>();
  const navigation = useNavigation<
    MyProfileNavigationProps | UserProfileNavigationProps
  >();
  const id = route.params?.userId;

  const {styles} = useStyles();

  useEffect(() => {
    navigation.setOptions({title: id});
  }, [navigation, id]);

  return (
    <View style={styles.gridContainer}>
      <FeedsGridView data={userBio} ListHeaderComponent={<ProfileHeader />} />
    </View>
  );
};

const useStyles = makeUseStyles(() => ({
  gridContainer: {
    marginTop: 5,
  },
}));
