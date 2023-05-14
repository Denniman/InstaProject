import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IHomeStackNavigator} from '../types';
import {HomeScreen, ProfileScreen} from '../screens';

const Stack = createNativeStackNavigator<IHomeStackNavigator>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={HomeScreen}
        options={{headerTitleAlign: 'center'}}
      />

      <Stack.Screen
        name="UserProfile"
        component={ProfileScreen}
        options={{title: 'Profile', headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
