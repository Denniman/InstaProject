/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useRef} from 'react';
import {View, Pressable} from 'react-native';
import {Text} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  Camera,
  CameraType,
  FlashMode,
  CameraPictureOptions,
  CameraRecordingOptions,
} from 'expo-camera';

import {makeUseStyles} from '../../helpers/makeUserStyles';

const flashModes = [
  FlashMode.off,
  FlashMode.on,
  FlashMode.auto,
  FlashMode.torch,
];

const flashModesIcon = {
  [FlashMode.off]: 'flash-off',
  [FlashMode.on]: 'flash-on',
  [FlashMode.auto]: 'flash-auto',
  [FlashMode.torch]: 'highlight',
};

export const PostUploadScreen = () => {
  const camera = useRef<Camera>(null);
  const [flash, setFlash] = useState(FlashMode.off);
  const [isRecording, setIsRecording] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [hasPermissionn, setHasPermission] = useState<boolean | null>(null);

  const {styles, colors} = useStyles();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();
      setHasPermission(
        cameraPermission.status === 'granted' &&
          microphonePermission.status === 'granted',
      );
    })();
  }, []);

  const toggleCameraType = () => {
    setCameraType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back,
    );
  };

  const toggleFlashMode = () => {
    const currentFlashMode = flashModes.indexOf(flash);
    const nextFlashMode =
      currentFlashMode === flashModes.length - 1 ? 0 : currentFlashMode + 1;
    setFlash(flashModes[nextFlashMode]);
  };

  const takePicture = async () => {
    if (!isCameraReady || !camera.current || isRecording) {
      return;
    }
    const options: CameraPictureOptions = {
      quality: 0.5,
      base64: false,
      skipProcessing: true,
    };
    const result = await camera.current.takePictureAsync(options);
    console.log(result);
  };

  const startRecording = async () => {
    if (!isCameraReady || !camera.current || isRecording) {
      return;
    }

    const options: CameraRecordingOptions = {
      quality: Camera.Constants.VideoQuality['480'],
      maxDuration: 60,
      maxFileSize: 10 * 1024 * 1024,
      mute: false,
    };
    setIsRecording(true);

    try {
      const result = await camera.current.recordAsync(options);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    setIsRecording(false);
  };

  const stopRecording = () => {
    if (isRecording) {
      camera.current?.stopRecording();
      setIsRecording(false);
    }
  };

  return (
    <View style={styles.wrapper}>
      {hasPermissionn === null ? (
        <Text>Loading...</Text>
      ) : hasPermissionn === false ? (
        <Text>Access to camera denied</Text>
      ) : (
        <Camera
          ref={camera}
          style={styles.camera}
          type={cameraType}
          ratio="4:3"
          flashMode={flash}
          onCameraReady={() => setIsCameraReady(true)}
        />
      )}
      <View style={[styles.buttonContainer, {top: 55}]}>
        <MaterialIcons name="close" size={30} color={colors.light.white} />
        <Pressable onPress={toggleFlashMode}>
          <MaterialIcons
            name={flashModesIcon[flash]}
            size={30}
            color={colors.light.white}
          />
        </Pressable>
        <MaterialIcons name="settings" size={30} color={colors.light.white} />
      </View>

      <View style={[styles.buttonContainer, {bottom: 40}]}>
        <MaterialIcons
          name="photo-library"
          size={30}
          color={colors.light.white}
        />

        {isCameraReady && (
          <Pressable
            onPress={takePicture}
            onLongPress={startRecording}
            onPressOut={stopRecording}>
            <View
              style={[
                styles.circle,
                {
                  backgroundColor: isRecording
                    ? colors.light.accent
                    : colors.light.white,
                },
              ]}
            />
          </Pressable>
        )}

        <Pressable onPress={toggleCameraType}>
          <MaterialIcons
            name="flip-camera-ios"
            size={30}
            color={colors.light.white}
          />
        </Pressable>
      </View>
    </View>
  );
};

const useStyles = makeUseStyles(({colors}) => ({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.light.transparentBlack,
  },
  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-around',
  },
  circle: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 75,
  },
}));
