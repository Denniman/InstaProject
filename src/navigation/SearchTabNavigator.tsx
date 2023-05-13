import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {ISearchTabNavigator} from '../types';
import {CommentScreen, UsersSearchScreen} from '../screens';
import {makeUseStyles} from '../helpers/makeUserStyles';

const Tab = createMaterialTopTabNavigator<ISearchTabNavigator>();

const SearchTabNavigator = () => {
  const insets = useSafeAreaInsets();
  const {colors} = useStyles();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {paddingTop: insets.top},
        tabBarIndicatorStyle: {
          backgroundColor: colors.light.MEDIUMSLATEBLUE_COLOR,
        },
      }}>
      <Tab.Screen name="Users" component={UsersSearchScreen} />
      <Tab.Screen name="Posts" component={CommentScreen} />
    </Tab.Navigator>
  );
};

const useStyles = makeUseStyles(() => ({}));

export default SearchTabNavigator;
