/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {ProfileScreen, PostUploadScreen} from '../screens';
import HomeStackNavigator from './HomeStackNavigator';

const Tabs = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tabs.Navigator screenOptions={{tabBarShowLabel: false}}>
      <Tabs.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <MaterialIcons name="home-filled" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Upload"
        component={PostUploadScreen}
        options={{
          tabBarLabel: 'Upload',
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        component={PostUploadScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="bell" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="My Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({size, color}) => (
            <FontAwesome name="user-circle-o" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabNavigator;
