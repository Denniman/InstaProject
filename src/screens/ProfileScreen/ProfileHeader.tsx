import React from 'react';
import {View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import {Button} from '../../components/Button';
import {IProfile} from './ProfileScreen.interface';
import {ProfileNavigationProps} from '../../types';
import {makeUseStyles} from '../../helpers/makeUserStyles';

export const ProfileHeader = ({
  imageURI = 'https://randomuser.me/api/portraits/women/25.jpg',
}: IProfile) => {
  const navigation = useNavigation<ProfileNavigationProps>();
  const {styles} = useStyles();
  return (
    <View style={styles.profileContainer}>
      <View style={styles.headerRow}>
        <Image source={{uri: imageURI}} style={styles.avatar} />
        <View style={styles.statsContainer}>
          <Text>12</Text>
          <Text style={styles.statsHeader}>Posts</Text>
        </View>

        <View style={styles.statsContainer}>
          <Text>5100</Text>
          <Text style={styles.statsHeader}>Following</Text>
        </View>

        <View style={styles.statsContainer}>
          <Text>2150</Text>
          <Text style={styles.statsHeader}>Followers</Text>
        </View>
      </View>
      <Text style={styles.name}>Denniman</Text>
      <Text style={styles.bio}>
        Loolor sit amet consectetur adipisicing elit. Commodi facere ipsa
        inventore architecto earum expedita eaque soluta voluptatum asperiores!
        Perspiciatis, sequi?
      </Text>
      <View style={styles.buttonWrapper}>
        <Button
          text="Edit Profile"
          onPress={() => navigation.navigate('Edit Profile')}
        />
        <Button text="Return home" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const useStyles = makeUseStyles(({fontWeight}) => ({
  profileContainer: {
    padding: 10,
  },
  statsContainer: {
    alignItems: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  avatar: {
    width: 80,
    aspectRatio: 1,
    borderRadius: 50,
  },
  statsHeader: {
    fontSize: 15,
    fontWeight: fontWeight.bold,
  },
  name: {
    fontSize: 17,
    fontWeight: fontWeight.bold,
  },
  bio: {
    fontSize: 17,
  },
  buttonWrapper: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  gridContainer: {
    marginTop: 5,
  },
}));
