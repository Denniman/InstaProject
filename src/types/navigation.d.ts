import {RouteProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootNavigator = {
  Home: undefined;
  Comments: {postId: string};
};

export type IBottomTabsNavigator = {
  Upload: undefined;
  Search: undefined;
  HomeStack: undefined;
  MyProfile: undefined;
  Notification: undefined;
};

export type IHomeStackNavigator = {
  Feed: undefined;
  UserProfile: {userId?: string};
};

export type ISearchTabNavigator = {
  Users: undefined;
  Posts: undefined;
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
  'UserProfile'
>;

export type MyProfileNavigationProps = BottomTabNavigationProp<
  IBottomTabsNavigator,
  'MyProfile'
>;

export type UserProfileRouteProps = RouteProp<
  IHomeStackNavigator,
  'UserProfile'
>;

export type MyProfileRouteProps = RouteProp<IBottomTabsNavigator, 'MyProfile'>;
