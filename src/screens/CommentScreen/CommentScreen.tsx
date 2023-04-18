/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import {comments} from '../../config';
import {CommentInput, Comments} from '../../components';

export const CommentScreen = () => {
  return (
    <View style={styles.comments}>
      <FlatList
        data={comments}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Comments {...item} includeDetails />}
        style={{padding: 5}}
      />
      <CommentInput />
    </View>
  );
};

const styles = StyleSheet.create({
  comments: {
    flex: 1,
  },
});
