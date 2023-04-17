import React, {useState} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {fontsColor} from '../../theme';

interface IVideoProps {
  uri?: string;
  paused: boolean;
}

export const VideoPlayer = ({uri, paused}: IVideoProps) => {
  const [muted, setMuted] = useState(true);

  return (
    <View>
      <Video
        repeat
        paused={paused}
        muted={muted}
        resizeMode="cover"
        source={{uri: uri}}
        style={styles.video}
      />
      <Pressable onPress={() => setMuted(!muted)} style={styles.buttonMute}>
        <Ionicons
          name={muted ? 'volume-mute' : 'volume-medium'}
          size={20}
          color="white"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  buttonMute: {
    right: 10,
    padding: 5,
    borderRadius: 25,
    bottom: 10,
    position: 'absolute',
    backgroundColor: fontsColor.black,
  },
});
