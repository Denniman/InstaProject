import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {EditProfileScreen, ProfileScreen} from '../screens';
import {IProfileStackNavigator} from './interface';

const Stack = createNativeStackNavigator<IProfileStackNavigator>();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="Edit Profile"
        component={EditProfileScreen}
        options={{headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
