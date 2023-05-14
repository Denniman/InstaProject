import React from 'react';
import {FieldError} from 'react-hook-form';
import {TextInput, Text} from 'react-native-paper';
import {View, TextInputProps} from 'react-native';

import {makeUseStyles} from '../../helpers/makeUserStyles';

interface ICustomInput extends TextInputProps {
  label: string;
  value?: string;
  error?: FieldError;
  multiline?: boolean;
  placeholder: string;
  onChangeText?: () => void;
}

export const CustomInput: React.FC<ICustomInput> = ({
  placeholder,
  label,
  error,
  value,
  multiline,
  onChangeText,
}) => {
  const {styles, colors} = useStyles();
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.errorWrapper}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={styles.input}
          multiline={multiline}
          underlineColor={colors.light.gray}
        />
        {error && <Text style={styles.error}>{error?.message}</Text>}
      </View>
    </View>
  );
};

const useStyles = makeUseStyles(({colors, fontWeight}) => ({
  container: {
    flex: 1,
    padding: 10,
  },
  imageWrapper: {
    marginBottom: 30,
    alignItems: 'center',
  },
  changeProfileButton: {
    fontSize: 17,
    fontWeight: fontWeight.bold,
    color: colors.light.MEDIUMSLATEBLUE_COLOR,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    width: 100,
    fontSize: 16,
    alignSelf: 'flex-end',
  },
  input: {
    maxHeight: 50,
    padding: 0,
    backgroundColor: 'transparent',
  },
  error: {
    color: colors.light.RED_COLOR,
  },
  errorWrapper: {
    flex: 1,
  },
}));
