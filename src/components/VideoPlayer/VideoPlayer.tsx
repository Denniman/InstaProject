import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {makeUseStyles} from '../../helpers/makeUserStyles';

interface IVideoProps {
  uri?: string;
  paused: boolean;
}

export const VideoPlayer = ({uri, paused}: IVideoProps) => {
  const [muted, setMuted] = useState(true);
  const {styles} = useStyles();

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

const useStyles = makeUseStyles(({colors}) => ({
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
    backgroundColor: colors.light.black,
  },
}));
