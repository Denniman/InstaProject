import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {styles} from './styles';
import {IComments} from './../../types/models';
import {fontsColor} from '../../theme';

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
          color={isLiked ? fontsColor.accent : fontsColor.black}
        />
      </Pressable>
    </View>
  );
};
