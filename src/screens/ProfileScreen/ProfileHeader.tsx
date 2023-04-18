import React from 'react';
import {View, Text, Image} from 'react-native';

import {Button} from '../../components/Button';
import {styles} from './styles';

interface IProfile {
  imageURI?: string;
}

export const ProfileHeader = ({
  imageURI = 'https://randomuser.me/api/portraits/women/25.jpg',
}: IProfile) => {
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
        <Button text="Edit Profile" />
        <Button text="Share Profile" />
      </View>
    </View>
  );
};
