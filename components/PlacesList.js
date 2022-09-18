import { FlatList, Text, View, StyleSheet } from "react-native";

import { Colors } from "../constants/colors";
import PlaceItem from "./PlaceItem";

const PlacesList = ({ places }) => {
  if (!places || places.length === 0) {
    return (
      <View style={s.fallbackContainer}>
        <Text style={s.fallbackText}>
          no places added yet - start adding some!
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem onSelect={() => {}} {...item} />}
    />
  );
};
export default PlacesList;

const s = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
