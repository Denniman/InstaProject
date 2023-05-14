/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  FlatList,
  ViewToken,
  ViewabilityConfig,
  useWindowDimensions,
} from 'react-native';

import {DoublePress} from '../../hooks';
import {makeUseStyles} from '../../helpers/makeUserStyles';

interface ICoursel {
  images: string[];
  onDoublePress: () => void;
}
export const Carousel = ({images, onDoublePress}: ICoursel) => {
  const {width} = useWindowDimensions();
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>();

  const {colors} = useStyles();

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (viewableItems.length > 0) {
        setActiveImageIndex(viewableItems[0].index);
      }
    },
  );

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  return (
    <View>
      <FlatList
        horizontal
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
        data={images}
        renderItem={({item}) => (
          <DoublePress onDoublePress={onDoublePress}>
            <Image
              source={{
                uri: item,
              }}
              style={{width, aspectRatio: 1}}
            />
          </DoublePress>
        )}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: -15,
          width: '100%',
        }}>
        {images.map((_, index) => (
          <View
            key={index.toString()}
            style={{
              width: 10,
              borderRadius: 5,
              aspectRatio: 1,
              marginHorizontal: 4,
              backgroundColor:
                activeImageIndex === index
                  ? colors.light.MEDIUMSLATEBLUE_COLOR
                  : colors.light.gray,
            }}
          />
        ))}
      </View>
    </View>
  );
};

const useStyles = makeUseStyles(() => ({}));
