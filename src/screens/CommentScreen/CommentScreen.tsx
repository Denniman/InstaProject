/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import {comments} from '../../config';
import {Comments} from '../../components/Comments';
import {Input} from '../../components/Input';

export const CommentScreen = () => {
  return (
    <View style={styles.comments}>
      <FlatList
        data={comments}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Comments {...item} includeDetails />}
        style={{padding: 5}}
      />
      <Input />
    </View>
  );
};

const styles = StyleSheet.create({
  comments: {
    flex: 1,
  },
});
