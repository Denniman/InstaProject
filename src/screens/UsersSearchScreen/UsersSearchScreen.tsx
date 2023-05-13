import React from 'react';
import {FlatList} from 'react-native';

import {user} from '../../config';
import {UserListItem} from '../../components';

export const UsersSearchScreen = () => {
  return (
    <FlatList data={user} renderItem={({item}) => <UserListItem {...item} />} />
  );
};
