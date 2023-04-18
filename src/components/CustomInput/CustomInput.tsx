import React from 'react';
import {FieldError} from 'react-hook-form';
import {
  View,
  Text,
  Platform,
  TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';

import {fontsColor, fontWeight} from '../../theme';

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
        />
        {error && <Text style={styles.error}>{error?.message}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: fontsColor.MEDIUMSLATEBLUE_COLOR,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    width: 100,
    fontSize: 16,
    alignSelf: 'flex-end',
    fontWeight: fontWeight.bold,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: fontsColor.BORDER_GRAY,
    paddingVertical: Platform.OS === 'ios' ? 9 : 5,
  },
  error: {
    color: fontsColor.RED_COLOR,
  },
  errorWrapper: {
    flex: 1,
  },
});
