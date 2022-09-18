import { Alert, Button, View, Image, Text, StyleSheet } from "react-native";
import React from "react";

import OutlineButton from "./UI/OutlinedButton";

import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";

import { Colors } from "../constants/colors";

const ImagePicker = () => {
  const [pickedImage, setPickedImage] = React.useState();
  const [cameraPermission, requestPermisson] = useCameraPermissions();

  const verifyPermissions = async () => {
    if (cameraPermission.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermisson();
      return permissionResponse.granted;
    }

    if (cameraPermission.status === PermissionStatus.DENIED) {
      Alert.alert(
        "insufficient Permissions!",
        "You need to grant camera permissions to use this app."
      );

      return false;
    }

    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setPickedImage(image.uri);
  };

  let imegePreview = <Text>No image talen yet.</Text>;

  if (pickedImage) {
    imegePreview = <Image style={s.image} source={{ uri: pickedImage }} />;
  }

  return (
    <View>
      <View style={s.imagePreviewContainer}>{imegePreview}</View>
      <OutlineButton icon="camera" onPress={takeImageHandler}>
        Take Image
      </OutlineButton>
    </View>
  );
};

export default ImagePicker;

const s = StyleSheet.create({
  imagePreviewContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 200,
    marginVertical: 8,
    backgroundColor: Colors.primary100,
    borderRadius: 5,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
