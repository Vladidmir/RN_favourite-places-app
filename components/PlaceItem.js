import { View, Image, Text, Pressable, StyleSheet } from "react-native";

const PlaceItem = ({ title, imageUrl, address, location, id, onSelect }) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: imageUrl }} />
      <View>
        <Text>{title}</Text>
        <Text>{address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const s = StyleSheet.create({});
