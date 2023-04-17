import {StyleSheet} from 'react-native';
import {fontWeight} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  userName: {
    fontWeight: fontWeight.bold,
  },
  text: {
    color: 'red',
    fontSize: 30,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  footer: {
    padding: 10,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  iconsWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
  },
  bookmark: {
    marginLeft: 'auto',
  },
  linkedText: {
    marginTop: 7,
  },
  postDescription: {
    marginTop: 7,
    lineHeight: 20,
  },
  author: {
    fontWeight: fontWeight.xBold,
  },
  comments: {
    marginTop: 7,
    alignItems: 'center',
    flexDirection: 'row',
  },
  mt: {
    marginTop: 7,
  },
});
