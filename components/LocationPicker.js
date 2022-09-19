import React from "react";
import { View, StyleSheet, Image, Text, Alert } from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

import MapboxGL from "@react-native-mapbox-gl/maps";

import OutlineButton from "./UI/OutlinedButton";
import { Colors } from "../constants/colors";

import { getMapPreview } from "../util/location";

const LocationPick = () => {
  const [pickedLocation, setPickedLocation] = React.useState(null);
  const [locationInformation, requestPermission] = useForegroundPermissions();
  const verifyPermission = async () => {
    if (locationInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (locationInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "insufficient Permissions!",
        "You need to grant location permissions to use this app."
      );

      return false;
    }

    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermission();

    if (!hasPermission) return;

    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      long: location.coords.longitude,
    });
  };

  const pickOnMapHandler = () => {};

  let locationPreview = pickedLocation ? (
    <Image
      style={{
        width: "100%",
        height: "100%",
      }}
      source={{
        uri: getMapPreview(pickedLocation.lat, pickedLocation.long),
      }}
    />
  ) : (
    <Text>No location picked yet.</Text>
  );

  return (
    <View>
      {locationPreview}
      <View style={s.mapPreview}>{locationPreview}</View>
      <View style={s.actions}>
        <OutlineButton onPress={getLocationHandler} icon="location">
          Locate User
        </OutlineButton>
        <OutlineButton onPress={pickOnMapHandler} icon="map">
          Pick on Map
        </OutlineButton>
      </View>
    </View>
  );
};
export default LocationPick;

const s = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
