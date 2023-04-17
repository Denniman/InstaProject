import React from 'react';
import {Image, StyleSheet} from 'react-native';

export type IItem = {
  uri: string;
};

export const FeedGridImage = ({uri}: IItem) => {
  return (
    <Image
      source={{
        uri,
      }}
      style={styles.postImage}
    />
  );
};

const styles = StyleSheet.create({
  postImage: {
    flex: 1,
    margin: 1,
    maxWidth: '33%',
    aspectRatio: 1,
  },
});
