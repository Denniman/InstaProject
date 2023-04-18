import React, {useState} from 'react';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';

import {userBio} from '../../config/userBio';

import {fontsColor, fontWeight} from '../../theme';
import {CustomInput} from '../../components';

const REGEX_PATTERN =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

interface SubmitHandlerProps {
  username: string;
  name: string;
  bio: string;
  avatar: string;
  website?: string;
}

export const EditProfileScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SubmitHandlerProps>({
    defaultValues: {
      name: userBio[0].name,
      bio: userBio[0].bio,
      website: userBio[0].website,
      username: userBio[0].username,
    },
  });

  const [selectedPhoto, setSelectedPhoto] = useState<null | Asset>(null);

  const onSubmit: SubmitHandler<SubmitHandlerProps> = data => {
    console.warn('Submitted!!', data);
  };

  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, assets, errorMessage, errorCode}) => {
        if (!didCancel && !errorCode && assets) {
          console.log('success!!', assets);
          setSelectedPhoto(assets[0]);
        } else {
          console.log('error!!', errorMessage);
        }
      },
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={{
            uri:
              selectedPhoto?.uri ||
              'https://randomuser.me/api/portraits/women/25.jpg',
          }}
          style={styles.avatar}
        />
        <Pressable onPress={onChangePhoto}>
          <Text style={styles.changeProfileButton}>Change profile photo</Text>
        </Pressable>
      </View>

      <View style={styles.inputControl}>
        <Controller
          name="name"
          control={control}
          rules={{required: 'Name is required'}}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              placeholder="Name"
              label="Name"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={errors.name}
            />
          )}
        />
      </View>

      <View style={styles.inputControl}>
        <Controller
          name="username"
          control={control}
          rules={{required: 'Username is required'}}
          render={({field: {onChange, value, onBlur}}) => (
            <CustomInput
              placeholder="Username"
              label="Username"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              error={errors.username}
            />
          )}
        />
      </View>

      <View style={styles.inputControl}>
        <Controller
          name="website"
          rules={{
            required: 'Website is required',
            pattern: {
              value: REGEX_PATTERN,
              message: 'Invalid URL',
            },
          }}
          control={control}
          render={({field: {onChange, value, onBlur}}) => (
            <CustomInput
              placeholder="Website"
              label="Website"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={errors.website}
            />
          )}
        />
      </View>

      <View style={styles.inputControl}>
        <Controller
          name="bio"
          control={control}
          rules={{required: 'Bio is required'}}
          render={({field: {onChange, value, onBlur}}) => (
            <CustomInput
              placeholder="Bio"
              label="Bio"
              multiline
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={errors.bio}
            />
          )}
        />
      </View>

      <Text onPress={handleSubmit(onSubmit)} style={styles.submit}>
        Submit
      </Text>
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
  avatar: {
    width: 70,
    aspectRatio: 1,
    marginBottom: 10,
    borderRadius: 50,
  },
  inputControl: {
    marginBottom: 12,
  },
  submit: {
    margin: 10,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: fontWeight.bold,
    color: fontsColor.MEDIUMSLATEBLUE_COLOR,
  },
});
