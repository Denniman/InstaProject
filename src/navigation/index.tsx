import React from 'react';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootNavigator} from '../types';
import {CommentScreen} from '../screens';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator<RootNavigator>();

const linking: LinkingOptions<RootNavigator> = {
  prefixes: ['instaphotos://'],
  config: {
    initialRouteName: 'Home',
    screens: {
      Comments: 'comments',
      Home: {
        screens: {
          HomeStack: {
            screens: {
              UserProfile: 'user',
            },
          },
        },
      },
    },
  },
};

const Navigation = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Comments" component={CommentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
