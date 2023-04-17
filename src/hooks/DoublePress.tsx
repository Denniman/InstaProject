import {Pressable} from 'react-native';
import React, {ReactNode} from 'react';

interface IDoublePress {
  children: ReactNode;
  onDoublePress: () => void;
}

export const DoublePress: React.FC<IDoublePress> = ({
  children,
  onDoublePress,
}) => {
  let lastTap = 0;

  const handleDoublePress = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      onDoublePress();
    }
    lastTap = now;
  };
  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};
