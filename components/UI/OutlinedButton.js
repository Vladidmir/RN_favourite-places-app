import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";
const OutlineButton = ({ onPress, icon, children }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [s.button, pressed && s.pressed]}
    >
      <Ionicons
        style={s.icon}
        name={icon}
        size={18}
        color={Colors.primary500}
      />
      <Text style={s.text}>{children}</Text>
    </Pressable>
  );
};
export default OutlineButton;

const s = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    borderWidth: 1,
    borderColor: Colors.primary500,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: Colors.primary500,
  },
});
