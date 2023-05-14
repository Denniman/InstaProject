/* eslint-disable react-native/no-inline-styles */
import {FlatList} from 'react-native';
import React, {ComponentType} from 'react';

import {IPost} from '../../types';

import {FeedGridImage} from './FeedGridImage';

interface IFeedGridView {
  data: IPost[];
  ListHeaderComponent:
    | ComponentType<any>
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
      style={{marginHorizontal: -1}}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};
