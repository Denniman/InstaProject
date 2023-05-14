import {Text, Pressable} from 'react-native';
import React from 'react';
import {makeUseStyles} from '../../helpers/makeUserStyles';

interface IButton {
  text: string;
  onPress?: () => void;
}

export const Button = ({text, onPress}: IButton) => {
  const {styles} = useStyles();
  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <Text style={styles.button}>{text}</Text>
    </Pressable>
  );
};

const useStyles = makeUseStyles(({colors, fontWeight}) => ({
  wrapper: {
    flex: 1,
    margin: 5,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: colors.light.BORDER_GRAY,
  },
  button: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: fontWeight.bold,
  },
}));
