import {Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {fontsColor, fontWeight} from '../../theme';

interface IButton {
  text: string;
  onPress?: () => void;
}

export const Button = ({text, onPress}: IButton) => {
  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <Text style={styles.button}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 5,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: fontsColor.BORDER_GRAY,
  },
  button: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: fontWeight.bold,
  },
});
