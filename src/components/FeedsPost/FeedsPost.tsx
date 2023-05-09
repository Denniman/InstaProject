import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {styles} from './styles';
import {Comments} from '../Comments';
import {VideoPlayer} from '../VideoPlayer';
import {Carousel} from '../Carousel';
import {DoublePress} from '../../hooks';
import {IFeedPost} from '../../types/models';
import {fontWeight, fontsColor} from '../../theme';

interface FeedPostProps extends IFeedPost {
  isVisible: boolean;
}

export const FeedsPost: React.FC<FeedPostProps> = ({
  id,
  likes,
  video,
  images,
  isVisible,
  comments,
  userName,
  createdAt,
  userImage,
  postDescription,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDescripExpanded, setIsDescripExpanded] = useState(false);
  const navigation = useNavigation<any>();

  const displayImage = images && images[0];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{uri: userImage}} style={styles.userAvatar} />
        <Text
          style={styles.userName}
          onPress={() => navigation.navigate('Profile', {userId: id})}>
          {userName}
        </Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {images && images.length > 0 ? (
        <Carousel onDoublePress={() => setIsLiked(!isLiked)} images={images} />
      ) : video ? (
        <DoublePress onDoublePress={() => setIsLiked(!isLiked)}>
          <VideoPlayer uri={video} paused={!isVisible} />
        </DoublePress>
      ) : (
        <DoublePress onDoublePress={() => setIsLiked(!isLiked)}>
          <Image
            source={{
              uri: displayImage,
            }}
            style={styles.image}
          />
        </DoublePress>
      )}

      <View style={styles.footer}>
        <View style={styles.iconsWrapper}>
          <Pressable onPress={() => setIsLiked(!isLiked)}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? fontsColor.accent : fontsColor.black}
            />
          </Pressable>

          <Ionicons name="chatbubble-outline" size={24} style={styles.icon} />
          <Feather name="send" size={24} style={styles.icon} />
          <Feather name="bookmark" size={24} style={styles.bookmark} />
        </View>
        <Text style={styles.linkedText}>
          Liked by <Text style={{fontWeight: fontWeight.xBold}}>Charles</Text>{' '}
          and <Text style={{fontWeight: fontWeight.xBold}}>{likes} others</Text>
        </Text>
        <Text
          numberOfLines={isDescripExpanded ? 0 : 2}
          style={styles.postDescription}>
          <Text style={styles.author}>{userName} </Text>
          {postDescription}
        </Text>
        <Pressable onPress={() => setIsDescripExpanded(!isDescripExpanded)}>
          <Text style={styles.mt}>{isDescripExpanded ? 'Less' : 'More'}</Text>
        </Pressable>

        {comments.map(item => (
          <Comments {...item} key={item.id} />
        ))}

        <Text style={styles.mt}>{createdAt}</Text>
      </View>
    </View>
  );
};
