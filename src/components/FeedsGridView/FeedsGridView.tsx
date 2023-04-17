/* eslint-disable react-native/no-inline-styles */
import {FlatList} from 'react-native';
import React from 'react';

import {IPost} from '../../types/models';

import {FeedGridImage} from './FeedGridImage';

interface IFeedGridView {
  data: IPost[];
  ListHeaderComponent:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

export const FeedsGridView = ({data, ListHeaderComponent}: IFeedGridView) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <FeedGridImage uri={item.images[0]} />}
      showsVerticalScrollIndicator={false}
      numColumns={3}
      ListHeaderComponent={ListHeaderComponent}
      style={{marginHorizontal: -1}}
    />
  );
};
