import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type RootNavigator = {
  Home: undefined;
  Comments: {postId: string};
};

export type IBottomTabsNavigator = {
  HomeStack: undefined;
  Upload: undefined;
  'My Profile': undefined;
  Notification: undefined;
};

export type IHomeStackNavigator = {
  Feed: undefined;
  Profile: {userId?: string};
};

export type IProfileStackNavigator = {
  Profile: undefined;
  'Edit Profile': undefined;
};

export type FeedNavigationProps = NativeStackNavigationProp<
  IHomeStackNavigator,
  'Feed'
>;

export type ProfileNavigationProps = NativeStackNavigationProp<
  IProfileStackNavigator,
  'Profile'
>;

export type UserProfileNavigationProps = NativeStackNavigationProp<
  IHomeStackNavigator,
  'Profile'
>;

export type MyUserProfileNavigationProps = BottomTabNavigationProp<
  IBottomTabsNavigator,
  'My Profile'
>;

export type UserProfileRouteProps = RouteProp<IHomeStackNavigator, 'Profile'>;

export type UserProfileNavigationRouteProps = RouteProp<
  IBottomTabsNavigator,
  'My Profile'
>;
