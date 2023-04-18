import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';

import {fontsColor, fontWeight} from '../../theme';

export const CommentInput = () => {
  const [comment, setComment] = useState('');

  return (
    <View style={styles.wrapper}>
      <Image
        source={{uri: 'https://randomuser.me/api/portraits/women/10.jpg'}}
        style={styles.image}
      />
      <TextInput
        placeholder="Add a comment..."
        style={styles.input}
        value={comment}
        multiline
        onChangeText={value => setComment(value)}
      />
      <Pressable style={styles.postButtonWrapper}>
        <Text style={styles.postText}>Post</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    borderColor: fontsColor.BORDER_GRAY,
  },
  image: {
    width: 40,
    aspectRatio: 1,
    marginRight: 5,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    paddingRight: 40,
    borderRadius: 13,
    paddingHorizontal: 10,
    borderColor: fontsColor.BORDER_GRAY,
    paddingVertical: Platform.OS === 'ios' ? 10 : 5,
  },
  postButtonWrapper: {
    right: 17,
    bottom: 30,
    position: 'absolute',
  },
  postText: {
    fontWeight: fontWeight.bold,
    color: fontsColor.MEDIUMSLATEBLUE_COLOR,
  },
});
