import React from "react";
import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";

import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

import { Colors } from "../constants/colors";

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = React.useState("");

  const changeTitleHandler = (enteredText) => {
    setEnteredTitle(enteredText);
  };
  return (
    <ScrollView style={s.form}>
      <View>
        <Text style={s.label}>Title</Text>
        <TextInput
          style={s.input}
          value={enteredTitle}
          onChange={changeTitleHandler}
        />
      </View>
      <ImagePicker />
      <LocationPicker />
    </ScrollView>
  );
};

export default PlaceForm;

const s = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    backgroundColor: Colors.primary100,
  },
});
