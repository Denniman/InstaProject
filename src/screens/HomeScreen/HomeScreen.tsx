import React, {useRef, useState} from 'react';
import {FlatList, ViewabilityConfig, ViewToken} from 'react-native';

import {postData} from '../../config';
import {FeedsPost} from '../../components/FeedsPost';

export const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState();

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id);
      }
    },
  );

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };
  return (
    <FlatList
      data={postData}
      renderItem={({item}) => (
        <FeedsPost {...item} isVisible={activePostId === item.id} />
      )}
      showsVerticalScrollIndicator={false}
      onViewableItemsChanged={onViewableItemsChanged.current}
      viewabilityConfig={viewabilityConfig}
    />
  );
};
