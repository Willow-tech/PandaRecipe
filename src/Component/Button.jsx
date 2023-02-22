import { Pressable, Text, StyleSheet } from "react-native";

export function Button({ onPress, title }) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "grey",
    padding: 16,
    borderRadius: 10,
  },
});
