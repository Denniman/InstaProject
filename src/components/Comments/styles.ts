import {StyleSheet} from 'react-native';
import {fontWeight} from '../../theme';

export const styles = StyleSheet.create({
  comments: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 7,
  },
  commentsText: {
    lineHeight: 18,
  },
  avatar: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 7,
  },
  author: {
    fontWeight: fontWeight.xBold,
  },
  commentReply: {
    marginBottom: 7,
    alignItems: 'center',
    flexDirection: 'row',
  },
  commentReplyText: {
    marginRight: 5,
  },
  middleColumn: {
    flex: 1,
  },
});
