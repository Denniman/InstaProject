import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IProfileStackNavigator} from '../typings';
import {EditProfileScreen, ProfileScreen} from '../screens';

const Stack = createNativeStackNavigator<IProfileStackNavigator>();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="Edit Profile"
        component={EditProfileScreen}
        options={{headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
