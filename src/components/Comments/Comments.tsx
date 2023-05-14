import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {IComments} from '../../types';
import {makeUseStyles} from '../../helpers/makeUserStyles';

interface ICommentsProps extends IComments {
  includeDetails?: boolean;
}

export const Comments = ({
  comment,
  user,
  avatar,
  includeDetails,
}: ICommentsProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const {styles, palette} = useStyles();
  return (
    <View style={styles.comments}>
      {avatar && <Image source={{uri: avatar}} style={styles.avatar} />}
      <View style={styles.middleColumn}>
        <Text style={styles.commentsText}>
          <Text style={styles.author}>{user} </Text>
          {comment}
        </Text>
        {includeDetails && (
          <View style={styles.commentReply}>
            <Text style={styles.commentReplyText}>5 hrs</Text>
            <Text style={styles.commentReplyText}>12 likes</Text>
            <Text style={styles.commentReplyText}>Reply</Text>
          </View>
        )}
      </View>
      <Pressable onPress={() => setIsLiked(!isLiked)} hitSlop={5}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          color={isLiked ? palette.accent : palette.black}
        />
      </Pressable>
    </View>
  );
};

const useStyles = makeUseStyles(({fontWeight}) => ({
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
}));
