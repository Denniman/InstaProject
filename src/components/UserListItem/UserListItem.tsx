import React from 'react';
import {View, Image, Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {IUser, UserProfileNavigationProps} from '../../types';
import {makeUseStyles} from '../../helpers/makeUserStyles';

export const UserListItem = ({id, image, name, userName}: IUser) => {
  const navigation = useNavigation<UserProfileNavigationProps>();
  const {styles} = useStyles();
  const navigateToUserScreen = () => {
    navigation.navigate('UserProfile', {userId: id});
  };
  return (
    <Pressable onPress={navigateToUserScreen} style={styles.row}>
      <Image source={{uri: image}} style={styles.image} />

      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
    </Pressable>
  );
};

const useStyles = makeUseStyles(({fontWeight, palette}) => ({
  row: {
    paddingLeft: 10,
    marginVertical: 15,
    flexDirection: 'row',
  },
  image: {
    width: 50,
    marginRight: 10,
    aspectRatio: 1,
    borderRadius: 25,
  },
  name: {
    marginBottom: 5,
    fontWeight: fontWeight.bold,
  },
  userName: {
    color: palette.gray,
  },
}));
